"use client";

// components/StepsCard.js
import { useState } from 'react';

const HowItWorks = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 flex-col">
      <div>
        <p className=' mb-10 text-3xl font-bold !leading-tight dark:text-white sm:text-4xl md:text-[45px] text-white'>
          How Virtualroom AI Works
        </p>
      </div>
      <div className="flex space-x-6 ">
        {/* Step 1: Upload */}
        <div className="w-80 p-6 rounded-2xl shadow-lg text-center border border-transparent bg-gray-800 hover:bg-gray-700 transition-all duration-300" style={{ borderImage: 'linear-gradient(to right, #8a2be2, #00c6ff) 1 '}} >
          <div className="mb-4 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mx-auto mb-4"
              viewBox="0 0 24 24"
              stroke="url(#gradient)"
              strokeWidth={2}
              fill="none"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            <h3 className="text-lg font-medium text-white">
              Upload a picture of your interior or exterior space
            </h3>
            <p className="text-sm mt-2">
              Or simply drag and drop your photo.
            </p>
          </div>
          <input type="file" onChange={handleFileUpload} className="hidden" id="file-upload" />
          <label
            htmlFor="file-upload"
            className="block w-full px-4 py-2 text-sm text-white bg-purple-600 rounded-lg cursor-pointer hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          >
            {file ? file.name : 'Choose a file'}
          </label>
        </div>

        {/* Step 2: Form */}
        <div className="w-80 p-6 rounded-2xl shadow-lg text-center border border-transparent bg-gray-800 hover:bg-gray-700 transition-all duration-300" style={{ borderImage: 'linear-gradient(to right, #8a2be2, #00c6ff) 1' }}>
          <div className="mb-4 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mx-auto mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12M8 12h8m-8 5h4" />
            </svg>
            <h3 className="text-lg font-medium text-white">
              Fill out a short form and select the style you are looking for
            </h3>
            <p className="text-sm mt-2">
              It's easy to find the right style for you with our online form.
            </p>
          </div>
        </div>

        {/* Step 3: Generate */}
        <div className="w-80 p-6 rounded-2xl shadow-lg text-center border border-transparent bg-gray-800 hover:bg-gray-700 transition-all duration-300" style={{ borderImage: 'linear-gradient(to right, #8a2be2, #00c6ff) 1' }}>
          <div className="mb-4 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mx-auto mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l9 4-9-4-9 4 9-4V4" />
            </svg>
            <h3 className="text-lg font-medium text-white">
              Press “Generate” to create different designs of your space
            </h3>
            <p className="text-sm mt-2">
              Our AI will generate images that perfectly fit your space.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
