import React from 'react';

const ActionButtons = ({ onGetStylingAdvice, onSummarizeStyle, isLoading }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
      <button
        onClick={onGetStylingAdvice}
        disabled={isLoading}
        className={`px-6 py-3 rounded-full font-semibold shadow-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer
                   ${
                     isLoading
                       ? "bg-gray-400 cursor-not-allowed"
                       : "bg-transparent border-2 border-purple-900 text-white hover:border-indigo-700 focus:ring-purple-900"
                   }`}
      >
        ✨ Get Styling Advice
      </button>
      <button
        onClick={onSummarizeStyle}
        disabled={isLoading}
        className={`px-6 py-3 rounded-full font-semibold shadow-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer
                   ${
                     isLoading
                       ? "bg-gray-400 cursor-not-allowed"
                       : "bg-transparent border-2 border-pink-900 text-white  hover:border-orange-600 focus:ring-pink-900"
                   }`}
      >
        ✨ Summarize My Style
      </button>
    </div>
  );
};

export default ActionButtons;