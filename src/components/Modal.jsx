import React from "react";
import StylingAdviceDisplay from "../PrototypeCompo/StylingAdvice";

const Modal = ({
  showModal,
  setShowModal,
  isLoading,
  error,
  geminiResponse,
}) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 mt-10">
      <div className="bg-[#5cbaa2] rounded-2xl shadow-2xl p-6 sm:p-8 max-w-lg w-full flex flex-col items-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Gemini's Take</h3>
        {isLoading ? (
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
            <p className="text-gray-600">Thinking...</p>
          </div>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <StylingAdviceDisplay advice={geminiResponse} />
        )}
        <button
          onClick={() => setShowModal(false)}
          className="mt-6 px-6 py-2 rounded-full bg-[#77ceb6] text-white font-semibold hover:bg-[#5ea18e] transition-colors cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
