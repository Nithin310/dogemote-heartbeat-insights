
import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, FileText, Check } from 'lucide-react';
import { toast } from "sonner";

interface PythonModelInfoProps {
  onPythonFileUpload: (file: File) => void;
  pythonFile: File | null;
}

const PythonModelInfo = ({ onPythonFileUpload, pythonFile }: PythonModelInfoProps) => {
  const [fileContent, setFileContent] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles?.length > 0) {
      const file = acceptedFiles[0];
      
      // Check file size (10MB limit)
      if (file.size > 10 * 1024 * 1024) {
        toast.error("File too large. Please upload a file under 10MB.");
        return;
      }

      // Check file extension
      if (!file.name.endsWith('.py')) {
        toast.error("Please upload a valid Python (.py) file.");
        return;
      }

      // Read file content
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setFileContent(content);
      };
      reader.readAsText(file);

      onPythonFileUpload(file);
      toast.success("Python file uploaded successfully!");
    }
  }, [onPythonFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    accept: {
      'text/x-python': ['.py']
    },
    maxFiles: 1
  });

  const clearFile = () => {
    onPythonFileUpload(null as any);
    setFileContent(null);
  };

  return (
    <div className="w-full">
      {!pythonFile ? (
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-colors duration-300 h-64 flex flex-col items-center justify-center
            ${isDragActive ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-green-400 hover:bg-green-50/50'}`}
        >
          <input {...getInputProps()} />
          <FileText className={`h-12 w-12 mb-4 ${isDragActive ? 'text-green-500' : 'text-gray-400'}`} />
          <p className="text-lg font-medium mb-2 text-gray-700">
            {isDragActive ? "Drop your Python model file here" : "Drag & drop your Python model file"}
          </p>
          <p className="text-sm text-gray-500">or click to browse your files</p>
          <p className="text-xs text-gray-400 mt-4">Supports .py files (Max 10MB)</p>
        </div>
      ) : (
        <div className="rounded-xl border border-gray-200 overflow-hidden">
          <div className="bg-green-50 p-4 flex items-center justify-between border-b border-gray-200">
            <div className="flex items-center">
              <FileText className="h-5 w-5 text-green-600 mr-2" />
              <span className="font-medium text-gray-800">{pythonFile.name}</span>
              <span className="ml-2 text-xs bg-green-100 text-green-800 py-1 px-2 rounded-full flex items-center">
                <Check className="h-3 w-3 mr-1" /> Attached
              </span>
            </div>
            <button 
              onClick={clearFile}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Remove file"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {fileContent && (
            <div className="p-4">
              <h4 className="font-medium text-sm mb-2 text-gray-700">File Preview:</h4>
              <div className="bg-gray-50 p-3 rounded-md overflow-auto max-h-64">
                <pre className="text-xs text-gray-800 whitespace-pre-wrap">{fileContent}</pre>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                <p>This Python file will be used for:</p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Enhancing emotion detection accuracy</li>
                  <li>Running custom analysis algorithms</li>
                  <li>Backend processing of image data</li>
                </ul>
                <p className="mt-2 text-amber-600">
                  <strong>Note:</strong> File will be stored locally only. To enable backend functionality, connect to Supabase.
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PythonModelInfo;
