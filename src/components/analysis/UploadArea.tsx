
import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Image, X } from 'lucide-react';
import { toast } from "sonner";

interface UploadAreaProps {
  onImageSelected: (image: File) => void;
}

const UploadArea = ({ onImageSelected }: UploadAreaProps) => {
  const [preview, setPreview] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles?.length > 0) {
      const file = acceptedFiles[0];
      
      // Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Image too large. Please upload an image under 5MB.");
        return;
      }

      // Check file type
      if (!file.type.startsWith('image/')) {
        toast.error("Please upload a valid image file.");
        return;
      }

      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
      onImageSelected(file);
      toast.success("Image uploaded successfully!");
    }
  }, [onImageSelected]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    maxFiles: 1
  });

  const clearImage = () => {
    setPreview(null);
  };

  return (
    <div className="w-full">
      {!preview ? (
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-colors duration-300 h-64 flex flex-col items-center justify-center
            ${isDragActive ? 'border-purple-500 bg-purple-50' : 'border-gray-300 hover:border-purple-400 hover:bg-purple-50/50'}`}
        >
          <input {...getInputProps()} />
          <Upload className={`h-12 w-12 mb-4 ${isDragActive ? 'text-purple-500' : 'text-gray-400'}`} />
          <p className="text-lg font-medium mb-2 text-gray-700">
            {isDragActive ? "Drop your dog's photo here" : "Drag & drop your dog's photo"}
          </p>
          <p className="text-sm text-gray-500">or click to browse your files</p>
          <p className="text-xs text-gray-400 mt-4">Supports JPG, PNG, WEBP (Max 5MB)</p>
        </div>
      ) : (
        <div className="relative rounded-xl overflow-hidden border border-gray-200">
          <img 
            src={preview}
            alt="Preview" 
            className="w-full object-contain max-h-96"
          />
          <button 
            onClick={clearImage}
            className="absolute top-3 right-3 bg-black/50 text-white rounded-full p-1 hover:bg-black/70 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default UploadArea;
