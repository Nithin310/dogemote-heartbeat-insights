
import { ArrowRight, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';
import dogImage from '../../assets/dog-hero.png';

const Hero = () => {
  return (
    <div className="hero-gradient min-h-screen pt-24 pb-16 px-4 bg-paw-pattern">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 md:pr-12">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full border border-white/30">
            <p className="text-sm font-medium text-purple-800">AI-Powered Dog Emotion Analysis</p>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-montserrat bg-gradient-to-r from-purple-800 to-indigo-700 text-transparent bg-clip-text leading-tight">
            Understand Your Dog's Heart
          </h1>
          
          <p className="text-xl text-gray-700">
            Real-Time AI-Powered Emotion & Health Insights. Connect deeper with your furry companion through advanced emotion analysis.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/analysis" className="dog-btn-primary flex items-center gap-2">
              <Upload className="w-5 h-5" />
              <span>Upload a Photo</span>
            </Link>
            <Link to="/about" className="dog-btn-secondary flex items-center gap-2">
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="pt-4">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-white border-2 border-purple-100 flex items-center justify-center overflow-hidden">
                    <span className="text-xs">🐶</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-700">
                Join <span className="font-semibold">1,000+</span> dog lovers already using DogEmote AI
              </p>
            </div>
          </div>
        </div>
        
        <div className="relative md:h-[500px] flex justify-center">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-purple-300/30 rounded-full blur-3xl"></div>
          <div className="relative animate-float">
            <img 
              src="/placeholder.svg"
              alt="Happy dog with visual emotion indicators"
              className="max-h-[450px] relative z-10 object-contain"
            />
            
            {/* Emotion Indicators */}
            <div className="absolute top-10 right-0 bg-white/90 backdrop-blur px-3 py-2 rounded-lg shadow-lg border border-purple-100 z-20 animate-pulse-slow">
              <p className="font-medium text-green-600 flex items-center">
                <span className="mr-1">😊</span> Happy: 95%
              </p>
            </div>
            
            <div className="absolute bottom-20 left-0 bg-white/90 backdrop-blur px-3 py-2 rounded-lg shadow-lg border border-purple-100 z-20 animate-pulse-slow">
              <p className="font-medium text-purple-600 flex items-center">
                <span className="mr-1">⚡</span> Playful: High
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 sm:h-24">
          <path fill="#ffffff" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,143.53,111.44,221.18,94.11Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
