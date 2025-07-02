import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-100 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-2xl flex flex-col items-center w-full max-w-md text-center">
        {/* Spinner at the top */}
        <div className="w-16 h-16 border-4 border-t-transparent border-red-600 rounded-full animate-spin mb-6"></div>

        {/* Text below spinner */}
        <h1 className="text-2xl font-semibold text-gray-700 mb-2">
          Processing your request
        </h1>
        <p className="text-gray-500">Please wait a moment...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
