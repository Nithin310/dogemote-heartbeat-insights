
import { SmilePlus, Frown, Activity, AlertTriangle, Loader2 } from 'lucide-react';
import { motion } from "framer-motion";

interface ResultsDisplayProps {
  isLoading: boolean;
  results: any; // This would be typed properly in a real implementation
}

const ResultsDisplay = ({ isLoading, results }: ResultsDisplayProps) => {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="rounded-full bg-purple-100 p-4 mb-4">
          <Loader2 className="h-8 w-8 text-purple-600 animate-spin" />
        </div>
        <h3 className="text-xl font-semibold mb-2 font-montserrat">Analyzing...</h3>
        <p className="text-gray-500">
          Our AI is examining your dog's emotions and health indicators
        </p>
      </div>
    );
  }

  if (!results) {
    return null;
  }

  // Simple animations for results
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="p-6 sm:p-8">
        <motion.div variants={itemVariants} className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 font-montserrat">Analysis Results</h3>
          <p className="text-gray-700">
            Here's what we detected based on your dog's photo:
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          <motion.div variants={itemVariants} className="bg-blue-50 rounded-xl p-5">
            <div className="flex items-center mb-4">
              <SmilePlus className="h-6 w-6 text-blue-600 mr-3" />
              <h4 className="font-montserrat font-semibold text-lg">Emotions</h4>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium">Happiness</span>
                  <span className="text-blue-600 font-medium">92%</span>
                </div>
                <div className="w-full bg-blue-200/50 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: "92%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium">Curiosity</span>
                  <span className="text-blue-600 font-medium">65%</span>
                </div>
                <div className="w-full bg-blue-200/50 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium">Anxiety</span>
                  <span className="text-blue-600 font-medium">12%</span>
                </div>
                <div className="w-full bg-blue-200/50 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: "12%" }}></div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-purple-50 rounded-xl p-5">
            <div className="flex items-center mb-4">
              <Activity className="h-6 w-6 text-purple-600 mr-3" />
              <h4 className="font-montserrat font-semibold text-lg">Mood & Activity</h4>
            </div>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="text-gray-700 font-medium w-24">Energy</span>
                <div className="flex-1 mx-2">
                  <div className="w-full bg-purple-200/50 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <span className="text-purple-600 font-medium">High</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-700 font-medium w-24">Alertness</span>
                <div className="flex-1 mx-2">
                  <div className="w-full bg-purple-200/50 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
                <span className="text-purple-600 font-medium">Alert</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-700 font-medium w-24">Playfulness</span>
                <div className="flex-1 mx-2">
                  <div className="w-full bg-purple-200/50 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <span className="text-purple-600 font-medium">Very High</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-6 bg-green-50 rounded-xl p-5">
          <div className="flex items-center mb-3">
            <h4 className="font-montserrat font-semibold text-lg">AI Explanation</h4>
          </div>
          <p className="text-gray-700">
            Your dog appears to be very happy and playful, with a relaxed posture and alert expression. The 
            raised ears, wide open mouth with tongue visible, and bright eyes all indicate positive emotions. 
            The active body position suggests high energy levels and readiness to play.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-6 bg-amber-50 border border-amber-100 rounded-xl p-5 flex">
          <div className="mr-3 flex-shrink-0">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
          </div>
          <div>
            <h4 className="font-montserrat font-semibold text-amber-800 mb-1">Important Note</h4>
            <p className="text-amber-700 text-sm">
              DogEmote AI is designed to provide insights, not replace professional veterinary care. If you have 
              concerns about your dog's health, please consult with a licensed veterinarian.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ResultsDisplay;
