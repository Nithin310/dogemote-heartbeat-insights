
import { Heart, Brain, Cpu, AlertTriangle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">About DogEmote AI</h2>
          <p className="text-lg text-gray-700">
            Using cutting-edge artificial intelligence, DogEmote AI analyzes your dog's facial expressions, 
            body language, and physiological indicators to provide real-time insights about their emotional state 
            and potential health concerns.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-dog-blue/30 to-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 card-hover">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Heart className="text-blue-600 h-8 w-8" />
            </div>
            <h3 className="font-montserrat font-semibold text-xl mb-4">Deepen Your Bond</h3>
            <p className="text-gray-700">
              Understand your dog's emotional state better than ever before. Strengthen your connection 
              by recognizing when they're happy, anxious, excited, or concerned.
            </p>
          </div>

          <div className="bg-gradient-to-br from-dog-yellow/30 to-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 card-hover">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Brain className="text-yellow-600 h-8 w-8" />
            </div>
            <h3 className="font-montserrat font-semibold text-xl mb-4">Enhance Training</h3>
            <p className="text-gray-700">
              Optimize your training sessions by gaining insights into your dog's emotional responses. 
              Learn what motivates them and when they might need a break.
            </p>
          </div>

          <div className="bg-gradient-to-br from-dog-peach/30 to-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 card-hover">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Cpu className="text-orange-600 h-8 w-8" />
            </div>
            <h3 className="font-montserrat font-semibold text-xl mb-4">Health Monitoring</h3>
            <p className="text-gray-700">
              Identify early signs of discomfort or health issues through visual cues that might otherwise go unnoticed.
            </p>
            <div className="mt-4 p-3 bg-orange-50 border border-orange-100 rounded-lg flex items-start space-x-2">
              <AlertTriangle className="text-orange-500 h-5 w-5 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Note:</span> DogEmote AI is not a replacement for veterinary care. 
                Always consult with a veterinarian for health concerns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
