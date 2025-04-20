
import { useState } from 'react';
import { Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HistoryItem {
  id: number;
  date: string;
  filename: string;
  thumbnail: string;
  results: {
    emotions: {
      [key: string]: number;
    };
    mood: {
      [key: string]: string;
    };
  };
}

interface HistoryCardProps {
  item: HistoryItem;
}

const HistoryCard = ({ item }: HistoryCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Get the primary emotion (highest percentage)
  const primaryEmotion = Object.entries(item.results.emotions).reduce(
    (prev, [emotion, value]) => (value > prev.value ? { emotion, value } : prev),
    { emotion: '', value: 0 }
  );

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-100">
      <div 
        className="flex items-center p-4 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="w-12 h-12 rounded-lg overflow-hidden mr-3 flex-shrink-0">
          <img 
            src={item.thumbnail} 
            alt="Dog" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-grow">
          <h4 className="font-medium text-gray-800 truncate">{item.filename}</h4>
          <div className="flex items-center text-xs text-gray-500">
            <Calendar className="h-3 w-3 mr-1" />
            {item.date}
          </div>
        </div>
        
        <div className="flex items-center">
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
            {primaryEmotion.emotion} {primaryEmotion.value}%
          </span>
          {isExpanded ? (
            <ChevronUp className="ml-2 h-5 w-5 text-gray-400" />
          ) : (
            <ChevronDown className="ml-2 h-5 w-5 text-gray-400" />
          )}
        </div>
      </div>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-0 border-t border-gray-100">
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <h5 className="text-xs font-semibold text-gray-700 mb-2">Emotions</h5>
                  <div className="space-y-2">
                    {Object.entries(item.results.emotions).slice(0, 3).map(([emotion, value]) => (
                      <div key={emotion} className="flex items-center text-xs">
                        <span className="w-20 text-gray-600 capitalize">{emotion}</span>
                        <div className="flex-grow mx-2">
                          <div className="w-full bg-gray-100 rounded-full h-1.5">
                            <div 
                              className="bg-blue-500 h-1.5 rounded-full" 
                              style={{ width: `${value}%` }}
                            />
                          </div>
                        </div>
                        <span className="text-blue-700">{value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h5 className="text-xs font-semibold text-gray-700 mb-2">Mood States</h5>
                  <div className="space-y-1">
                    {Object.entries(item.results.mood).slice(0, 3).map(([state, level]) => (
                      <div key={state} className="text-xs flex justify-between">
                        <span className="text-gray-600 capitalize">{state}:</span>
                        <span className="text-purple-600 capitalize">{level}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HistoryCard;
