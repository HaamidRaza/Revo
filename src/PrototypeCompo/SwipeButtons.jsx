import React from 'react';
import { Heart, X } from "lucide-react";

const SwipeButtons = ({ onSwipe, disabled = false }) => {
  return (
    <div className="flex justify-center space-x-6">
      <button
        onClick={() => onSwipe("right")}
        disabled={disabled}
        className="p-4 rounded-full bg-red-500 text-white shadow-lg hover:bg-red-600 hover:scale-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Not interested, swipe left"
      >
        <X size={32} />
      </button>
      <button
        onClick={() => onSwipe("left")}
        disabled={disabled}
        className="p-4 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Interested, swipe right"
      >
        <Heart size={32} />
      </button>
    </div>
  );
};

export default SwipeButtons;