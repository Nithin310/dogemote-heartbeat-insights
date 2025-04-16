
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BookOpen, FileText, Video, Clock } from "lucide-react";

const Resources = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-28 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">Resources</h1>
            <p className="text-lg text-gray-700">
              Our resource center is currently under construction. We're working on 
              a comprehensive library of articles, guides, and videos on dog behavior, health, and care.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-purple-50 border border-purple-100 rounded-2xl p-10 text-center mb-12">
              <BookOpen className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-6 font-montserrat">Coming Soon!</h2>
              <p className="text-gray-700 mb-6">
                We're creating valuable content to help you better understand your dog's behavior, emotions, and health.
              </p>
              <div className="inline-flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-purple-100">
                <Clock className="h-4 w-4 text-purple-500 mr-2" />
                <span className="text-sm text-gray-700 font-medium">Expected launch: Summer 2025</span>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-6 font-montserrat">Topics We'll Cover</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <FileText className="h-6 w-6 text-purple-500 mb-4" />
                  <h3 className="font-montserrat font-semibold mb-3">Understanding Dog Emotions</h3>
                  <p className="text-gray-700 text-sm">
                    In-depth articles on recognizing and responding to your dog's emotional states.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <Video className="h-6 w-6 text-purple-500 mb-4" />
                  <h3 className="font-montserrat font-semibold mb-3">Training Videos</h3>
                  <p className="text-gray-700 text-sm">
                    Tutorials on using positive reinforcement to strengthen your bond with your dog.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <BookOpen className="h-6 w-6 text-purple-500 mb-4" />
                  <h3 className="font-montserrat font-semibold mb-3">Health Guides</h3>
                  <p className="text-gray-700 text-sm">
                    Information on common health issues and when to seek veterinary care.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-4 font-montserrat">Subscribe for Updates</h2>
              <p className="text-gray-700 mb-6">
                Be the first to know when our resource library launches.
              </p>
              <div className="max-w-md mx-auto">
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <button className="dog-btn-primary whitespace-nowrap">
                    Notify Me
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  We respect your privacy and will never share your information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Resources;
