
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Brain, Heart, Shield, DogBowl, PawPrint } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-28 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">About DogEmote AI</h1>
            <p className="text-lg text-gray-700">
              We're passionate about helping humans understand their canine companions better through 
              cutting-edge artificial intelligence and computer vision technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4 font-montserrat">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                At DogEmote AI, we believe that a deeper understanding of our dogs' emotions leads to better care, 
                stronger bonds, and happier lives for both pets and their humans.
              </p>
              <p className="text-gray-700 mb-4">
                Our AI technology decodes subtle facial expressions, body postures, and visual cues to give you insight 
                into what your dog might be feeling, helping you respond to their needs more effectively.
              </p>
              <p className="text-gray-700">
                While we use advanced technology, our purpose is simple: to strengthen the beautiful connection between 
                you and your four-legged family member.
              </p>
            </div>
            <div className="bg-dog-blue rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-paw-pattern"></div>
              <div className="relative z-10">
                <PawPrint className="h-12 w-12 text-blue-500 mb-6" />
                <h3 className="text-xl font-semibold mb-3 font-montserrat">Our Core Values</h3>
                <ul className="space-y-3">
                  {[
                    "Enhancing human-dog relationships through technology",
                    "Creating tools that improve pet welfare and happiness",
                    "Making AI accessible and useful for all dog owners",
                    "Supporting responsible pet care through education"
                  ].map((value, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      <span className="text-gray-700">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-semibold mb-4 font-montserrat">How DogEmote AI Works</h2>
            <p className="text-gray-700">
              Our platform uses cutting-edge machine learning models trained on thousands of images of dogs 
              displaying various emotions and health conditions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-montserrat font-semibold text-lg mb-3">Intelligent Analysis</h3>
              <p className="text-gray-700">
                Our AI recognizes facial features, ear positions, body postures, and other visual cues to interpret 
                your dog's emotional state.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-montserrat font-semibold text-lg mb-3">Emotional Insights</h3>
              <p className="text-gray-700">
                We detect a range of emotions including happiness, anxiety, fear, playfulness, curiosity, and more, 
                with confidence scores for each.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <DogBowl className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-montserrat font-semibold text-lg mb-3">Health Indicators</h3>
              <p className="text-gray-700">
                Our system can identify potential signs of discomfort or health issues that might warrant 
                attention from your veterinarian.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <Shield className="h-12 w-12" />
            </div>
            <h2 className="text-2xl font-semibold mb-4 font-montserrat">Our Commitment to You</h2>
            <p className="mb-4">
              DogEmote AI is designed to complement, not replace, veterinary care. We provide insights that 
              can help you better understand your dog's emotional state and potential health concerns.
            </p>
            <p>
              Always consult with a licensed veterinarian for proper diagnosis and treatment of any health issues 
              your pet may be experiencing.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
