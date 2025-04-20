
import { SmilePlus, Activity, AlertTriangle, Brain, Loader2, Heart } from 'lucide-react';
import { motion } from "framer-motion";

// Define proper types for our results data
interface EmotionResults {
  emotions: {
    [key: string]: number;
  };
  mood: {
    [key: string]: string;
  };
}

interface ResultsDisplayProps {
  isLoading: boolean;
  results: EmotionResults | null;
}

const ResultsDisplay = ({ isLoading, results }: ResultsDisplayProps) => {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="rounded-full bg-purple-100 p-4 mb-4"
        >
          <Loader2 className="h-8 w-8 text-purple-600 animate-spin" />
        </motion.div>
        <h3 className="text-2xl font-semibold mb-2 font-montserrat">Analyzing...</h3>
        <p className="text-gray-600">
          Our AI is examining your dog's emotions and behavior patterns
        </p>
      </div>
    );
  }

  if (!results) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="p-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 font-montserrat text-gray-800">Analysis Results</h3>
        <p className="text-gray-700">
          Here's what we detected in your dog's photo:
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 mb-8">
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Heart className="h-6 w-6 text-blue-600 mr-3" />
            <h4 className="font-montserrat font-semibold text-lg text-gray-800">Emotions</h4>
          </div>
          <div className="space-y-4">
            {Object.entries(results.emotions).map(([emotion, value]) => (
              <div key={emotion}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium capitalize">{emotion}</span>
                  <span className="text-blue-600 font-medium">{value}%</span>
                </div>
                <div className="w-full bg-blue-100 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2.5 rounded-full transition-all duration-1000"
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Brain className="h-6 w-6 text-purple-600 mr-3" />
            <h4 className="font-montserrat font-semibold text-lg text-gray-800">Behavioral State</h4>
          </div>
          <div className="space-y-4">
            {Object.entries(results.mood).map(([state, level]) => (
              <div key={state} className="flex items-center">
                <span className="text-gray-700 font-medium w-24 capitalize">{state}</span>
                <div className="flex-1 px-3">
                  <div className="w-full bg-purple-100 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full" 
                      style={{ width: typeof level === 'string' && (level.includes('very') ? '90%' : level.includes('highly') ? '80%' : '60%') }} />
                  </div>
                </div>
                <span className="text-purple-600 font-medium capitalize">{level}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 mb-6">
        <div className="flex items-center mb-3">
          <SmilePlus className="h-6 w-6 text-green-600 mr-3" />
          <h4 className="font-montserrat font-semibold text-lg text-gray-800">AI Interpretation</h4>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Based on our analysis, your dog appears to be in an excellent emotional state. The high happiness and playfulness scores, 
          combined with moderate relaxation levels, suggest a well-balanced and content disposition. The elevated curiosity and 
          sociability indicators point to an engaged and friendly temperament.
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="bg-amber-50 rounded-xl p-6 flex">
        <div className="mr-3 flex-shrink-0">
          <AlertTriangle className="h-5 w-5 text-amber-500" />
        </div>
        <div>
          <h4 className="font-montserrat font-semibold text-amber-800 mb-1">Important Note</h4>
          <p className="text-amber-700 text-sm">
            While our AI provides valuable insights into your dog's emotional state, it should not replace professional veterinary 
            care. If you have concerns about your dog's health or behavior, please consult with a licensed veterinarian.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ResultsDisplay;
