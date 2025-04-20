
import { useState } from "react";
import { motion } from "framer-motion";
import { Book, Video, FileText, Lightbulb } from "lucide-react";
import { DogBowl } from "../components/icons/CustomIcons"; // Use the custom icon instead
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BreedEmotionGuide from "../components/resources/BreedEmotionGuide";

// Custom DogBowl icon
const DogBowlIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 14c.5-.6 1.2-1 2-1s1.5.4 2 1" />
    <path d="M19 5c-.3-2.1-1.7-3-4-3h-6c-2.3 0-3.7.9-4 3-2 0-4 .5-4 4 0 3.4 2 5 4 5 0 0 .2 9 8 9s8-9 8-9c2 0 4-1.6 4-5 0-3.5-2-4-4-4z" />
  </svg>
);

const Resources = () => {
  const [activeTab, setActiveTab] = useState("guide");
  
  const tabs = [
    { id: "guide", label: "Emotion Guide", icon: DogBowl },
    { id: "articles", label: "Articles", icon: FileText },
    { id: "videos", label: "Videos", icon: Video },
    { id: "books", label: "Books", icon: Book },
    { id: "tips", label: "Expert Tips", icon: Lightbulb },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      
      <div className="pt-28 pb-16 px-4">
        <div className="container mx-auto">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 font-montserrat bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
              variants={itemVariants}
            >
              Dog Emotion Resources
            </motion.h1>
            
            <motion.p 
              className="text-gray-700 text-lg md:text-xl"
              variants={itemVariants}
            >
              Explore our library of resources to better understand your dog's emotional world.
            </motion.p>
          </motion.div>
          
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
            variants={itemVariants}
          >
            <div className="flex flex-wrap border-b">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`flex items-center px-6 py-4 font-medium transition-colors ${
                    activeTab === tab.id 
                      ? "text-purple-600 border-b-2 border-purple-600" 
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <tab.icon className="mr-2 h-5 w-5" />
                  {tab.label}
                </button>
              ))}
            </div>
            
            <div className="p-6">
              {activeTab === "guide" && <BreedEmotionGuide />}
              
              {activeTab === "articles" && (
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold mb-6 font-montserrat">Latest Articles</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src={`https://images.unsplash.com/photo-1550136513-${i}05686cbcc${i}?q=80&w=600&auto=format&fit=crop`}
                          alt="Dog Article" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-5">
                          <h3 className="font-semibold text-lg mb-2">Understanding Canine Body Language</h3>
                          <p className="text-gray-600 text-sm mb-4">Learn how to interpret your dog's subtle emotional cues through their unique body language signals.</p>
                          <button className="text-purple-600 font-medium text-sm">Read Article →</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "videos" && (
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold mb-6 font-montserrat">Educational Videos</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                        <div className="relative">
                          <img 
                            src={`https://images.unsplash.com/photo-1550136513-${i}05686cbcc${i}?q=80&w=600&auto=format&fit=crop`}
                            alt="Dog Video" 
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center">
                              <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-5">
                          <h3 className="font-semibold text-lg mb-2">How Dogs Express Joy</h3>
                          <p className="text-gray-600 text-sm mb-4">Discover the various ways different breeds express happiness and contentment.</p>
                          <button className="text-purple-600 font-medium text-sm">Watch Video →</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "books" && (
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold mb-6 font-montserrat">Recommended Books</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                      <div key={i} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm flex">
                        <div className="w-1/3 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center p-4">
                          <Book className="h-12 w-12 text-purple-600" />
                        </div>
                        <div className="w-2/3 p-4">
                          <h3 className="font-semibold text-md mb-1">Inside the Canine Mind</h3>
                          <p className="text-xs text-gray-500 mb-2">By Dr. Jane Watson</p>
                          <button className="text-purple-600 text-xs font-medium">View Details →</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "tips" && (
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold mb-6 font-montserrat">Expert Tips</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-blue-50 rounded-xl p-6">
                      <div className="flex items-center mb-4">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                          <Lightbulb className="h-5 w-5 text-blue-600" />
                        </div>
                        <h3 className="font-semibold text-lg">Recognizing Anxiety</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Look for these signs: excessive panting, pacing, whining, tucked tail, 
                        and avoiding eye contact. Anxiety can manifest differently across breeds.
                      </p>
                      <div className="bg-white/70 p-3 rounded-lg text-sm text-gray-700">
                        <strong className="text-blue-700">Pro Tip:</strong> Create a quiet, safe space 
                        where your dog can retreat when feeling overwhelmed.
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 rounded-xl p-6">
                      <div className="flex items-center mb-4">
                        <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                          <Lightbulb className="h-5 w-5 text-purple-600" />
                        </div>
                        <h3 className="font-semibold text-lg">Enhancing Bonding</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Regular eye contact, speaking in a soft tone, and physical touch all release 
                        oxytocin in both you and your dog, strengthening your emotional connection.
                      </p>
                      <div className="bg-white/70 p-3 rounded-lg text-sm text-gray-700">
                        <strong className="text-purple-700">Pro Tip:</strong> Try a 5-minute daily 
                        ritual of quiet, focused attention with your dog.
                      </div>
                    </div>
                    
                    <div className="bg-green-50 rounded-xl p-6">
                      <div className="flex items-center mb-4">
                        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                          <Lightbulb className="h-5 w-5 text-green-600" />
                        </div>
                        <h3 className="font-semibold text-lg">Reading Tail Signals</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        A relaxed, neutral tail position varies by breed. Learn your dog's baseline 
                        and watch for changes in position, height, and the speed/direction of wagging.
                      </p>
                      <div className="bg-white/70 p-3 rounded-lg text-sm text-gray-700">
                        <strong className="text-green-700">Pro Tip:</strong> Left-side tail wagging 
                        often indicates negative emotions, while right-side wagging suggests positive ones.
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 rounded-xl p-6">
                      <div className="flex items-center mb-4">
                        <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
                          <Lightbulb className="h-5 w-5 text-yellow-600" />
                        </div>
                        <h3 className="font-semibold text-lg">Ear Positioning</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Forward-facing ears generally indicate alertness and interest, while ears 
                        flattened against the head may signal fear or submission.
                      </p>
                      <div className="bg-white/70 p-3 rounded-lg text-sm text-gray-700">
                        <strong className="text-yellow-700">Pro Tip:</strong> Breed differences matter greatly 
                        with ear positions - floppy-eared dogs show more subtle changes.
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Resources;
