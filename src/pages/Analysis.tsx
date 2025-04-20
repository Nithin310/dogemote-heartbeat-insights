
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UploadArea from "../components/analysis/UploadArea";
import ResultsDisplay from "../components/analysis/ResultsDisplay";
import PythonModelInfo from "../components/analysis/PythonModelInfo";

const Analysis = () => {
  const [analysisFile, setAnalysisFile] = useState<File | null>(null);
  const [pythonFile, setPythonFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleImageSelected = (file: File) => {
    setAnalysisFile(file);
    
    // Simulate analysis process
    setIsAnalyzing(true);
    setResults(null);
    
    setTimeout(() => {
      setIsAnalyzing(false);
      setResults({
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
      });
    }, 2500);
  };

  const handlePythonFileUpload = (file: File) => {
    setPythonFile(file);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <Navbar />
      
      <div className="pt-28 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
              Analyze Your Dog's Emotions
            </h1>
            <p className="text-gray-700 text-lg md:text-xl">
              Upload a photo of your furry friend and let our AI analyze their emotional state and behavioral patterns.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-semibold mb-6 font-montserrat text-gray-800">Upload Your Dog's Photo</h2>
              <UploadArea onImageSelected={handleImageSelected} />
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-semibold mb-6 font-montserrat text-gray-800">Add Custom Python Model</h2>
              <PythonModelInfo onPythonFileUpload={handlePythonFileUpload} pythonFile={pythonFile} />
            </div>
            
            {(isAnalyzing || results) && (
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl">
                <ResultsDisplay isLoading={isAnalyzing} results={results} />
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Analysis;
