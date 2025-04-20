
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Dog, Lightbulb, History } from "lucide-react";
import { toast } from "sonner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UploadArea from "../components/analysis/UploadArea";
import ResultsDisplay from "../components/analysis/ResultsDisplay";
import PythonModelInfo from "../components/analysis/PythonModelInfo";
import HistoryCard from "../components/analysis/HistoryCard";

const Analysis = () => {
  const [analysisFile, setAnalysisFile] = useState<File | null>(null);
  const [pythonFile, setPythonFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [analysisHistory, setAnalysisHistory] = useState<any[]>([]);

  const handleImageSelected = (file: File) => {
    setAnalysisFile(file);
    
    // Simulate analysis process
    setIsAnalyzing(true);
    setResults(null);
    
    setTimeout(() => {
      setIsAnalyzing(false);
      const newResults = {
        emotions: {
          happiness: 95,
          curiosity: 78,
          anxiety: 15,
          playfulness: 88
        },
        mood: {
          energy: "very high",
          alertness: "highly alert",
          sociability: "very friendly",
          relaxation: "moderately relaxed"
        }
      };
      
      setResults(newResults);
      
      // Add to history
      setAnalysisHistory(prev => [
        {
          id: Date.now(),
          date: new Date().toLocaleString(),
          filename: file.name,
          thumbnail: URL.createObjectURL(file),
          results: newResults
        },
        ...prev.slice(0, 4) // Keep only 5 most recent
      ]);
      
      toast.success("Analysis complete! Results are ready.");
    }, 2500);
  };

  const handlePythonFileUpload = (file: File) => {
    setPythonFile(file);
    toast.success("Custom Python model uploaded successfully!");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <Navbar />
      
      <div className="pt-28 pb-16 px-4">
        <div className="container mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6 font-montserrat bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text"
            >
              Analyze Your Dog's Emotions
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-gray-700 text-lg md:text-xl"
            >
              Upload a photo of your furry friend and let our AI analyze their emotional state and behavioral patterns.
            </motion.p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <motion.div 
                variants={itemVariants}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-purple-100 p-2 rounded-lg mr-4">
                    <Dog className="h-6 w-6 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-semibold font-montserrat text-gray-800">Upload Your Dog's Photo</h2>
                </div>
                <UploadArea onImageSelected={handleImageSelected} />
              </motion.div>

              {(isAnalyzing || results) && (
                <motion.div 
                  variants={itemVariants}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl"
                >
                  <ResultsDisplay isLoading={isAnalyzing} results={results} />
                </motion.div>
              )}
            </div>

            <div className="space-y-8">
              <motion.div 
                variants={itemVariants}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <Lightbulb className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-semibold font-montserrat text-gray-800">Advanced Options</h2>
                </div>
                <PythonModelInfo onPythonFileUpload={handlePythonFileUpload} pythonFile={pythonFile} />
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <History className="h-6 w-6 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-semibold font-montserrat text-gray-800">Analysis History</h2>
                </div>
                
                {analysisHistory.length > 0 ? (
                  <div className="space-y-4">
                    {analysisHistory.map(item => (
                      <HistoryCard key={item.id} item={item} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <p>No analysis history yet</p>
                    <p className="text-sm mt-2">Upload a photo to get started</p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Analysis;
