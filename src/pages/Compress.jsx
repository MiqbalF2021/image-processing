import React, { useState } from 'react';
import ImageCompressor from '../components/ImageCompressor';
import Navbar from '../components/Navbar';

function Compress() {
  const [compressedImage, setCompressedImage] = useState(null);
  const [compressedImageUrl, setCompressedImageUrl] = useState(null);

  const handleCompressedImage = (compressedImage) => {
    setCompressedImage(compressedImage);
    setCompressedImageUrl(compressedImage);
  };

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = compressedImageUrl;
    link.download = 'compressed_image.jpg'; // Ganti nama file sesuai kebutuhan
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const deleteImage = () => {
    setCompressedImage(null);
    setCompressedImageUrl(null);
  };

  return (
    <div>
        <Navbar/>
        <div className="bg-gray-800 min-h-screen py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        
      <h1 className="text-3xl text-white mb-8 font-medium">Image Compressor</h1>
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <ImageCompressor 
          onCompressedImage={handleCompressedImage} 
        />
        {compressedImageUrl && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Compressed Image</h3>
            <img src={compressedImageUrl} alt="Compressed" className="rounded-lg mb-4 w-50" />
            <button 
              onClick={downloadImage} 
              className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-700 transition duration-300"
            >
              Download
            </button>
            <button 
                onClick={deleteImage} 
                className="bg-red-600 text-white ml-3 py-2 px-4 rounded-lg hover:bg-red-800 transition duration-300"
              >
                Delete
              </button>
          </div>
        )}
      </div>
    </div>
    </div>
    
  );
}

export default Compress;
