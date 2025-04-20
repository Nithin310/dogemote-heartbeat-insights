
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
    
    // Mock the AI analysis with a delay
    setTimeout(() => {
      setIsAnalyzing(false);
      setResults({
        emotions: {
          happiness: 92,
          curiosity: 65,
          anxiety: 12
        },
        mood: {
          energy: "high",
          alertness: "alert",
          playfulness: "very high"
        }
      });
    }, 2500);
  };

  const handlePythonFileUpload = (file: File) => {
    setPythonFile(file);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-28 pb-16 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">Analyze Your Dog's Emotions</h1>
            <p className="text-gray-700 text-lg">
              Upload a photo of your furry friend, and our AI will analyze their emotions and provide health insights in real-time.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-10">
            <h2 className="text-xl font-semibold mb-6 font-montserrat">Upload a Photo</h2>
            <UploadArea onImageSelected={handleImageSelected} />
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-10">
            <h2 className="text-xl font-semibold mb-6 font-montserrat">Add Python Model File</h2>
            <PythonModelInfo onPythonFileUpload={handlePythonFileUpload} pythonFile={pythonFile} />
          </div>
          
          {(isAnalyzing || results) && (
            <div className="max-w-4xl mx-auto">
              <ResultsDisplay isLoading={isAnalyzing} results={results} />
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Analysis;
