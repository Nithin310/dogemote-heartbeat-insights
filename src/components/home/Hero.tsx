import { ArrowRight, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';
import dogImage from '../../assets/dog-hero.png';
const Hero = () => {
  return <div className="hero-gradient min-h-screen pt-24 pb-16 px-4 bg-paw-pattern">
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
                {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-white border-2 border-purple-100 flex items-center justify-center overflow-hidden">
                    <span className="text-xs">🐶</span>
                  </div>)}
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
            <img alt="Happy dog with visual emotion indicators" src="data:image/jpeg;base64,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" className="max-h-[450px] relative z-10 object-contain" />
            
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
    </div>;
};
export default Hero;