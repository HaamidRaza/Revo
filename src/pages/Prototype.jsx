import React from "react";
import { useState } from "react";
import ClothingCard from "../PrototypeCompo/ClothingCard";
import EndOfItemsCard from "../PrototypeCompo/EndOfItems";
import SwipeButtons from "../PrototypeCompo/SwipeButtons";
import ActionButtons from "../PrototypeCompo/ActionButtons";
import LikedItemsSection from "../PrototypeCompo/LikedItemsSec";
import { mockClothes } from "../PrototypeCompo/mockData";
import { useSwipeLogic } from "../PrototypeCompo/useSwipeLogic";
import { callGeminiAPI } from "../PrototypeCompo/apiService";

const PrototypePage = ({
  setShowModal,
  isLoading,
  setIsLoading,
  setError,
  setGeminiResponse,
}) => {
  const {
    currentIndex,
    likedItems,
    isSwiping,
    swipeDirection,
    swipeEffect,
    handleSwipe,
  } = useSwipeLogic(mockClothes);

  const [modalTitle, setModalTitle] = useState("");

  const getStylingAdvice = async () => {
    if (likedItems.length === 0) {
      setGeminiResponse("Please like a few items first to get styling advice!");
      setModalTitle("Oops!");
      setShowModal(true);
      return;
    }

    setIsLoading(true);
    setError("");
    setModalTitle("Your Styling Advice");
    setShowModal(true);

    const likedDescriptions = likedItems
      .map((item) => `${item.name}: ${item.description}`)
      .join("; ");
    const prompt = `Based on these clothing items I have liked: "${likedDescriptions}", suggest a few creative and fashionable outfit combinations. Provide the output in a conversational tone.`;

    try {
      const text = await callGeminiAPI(prompt);
      setGeminiResponse(text);
    } catch (e) {
      console.error("Error fetching data:", e);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const summarizeStyle = async () => {
    if (likedItems.length === 0) {
      setGeminiResponse(
        "Please like a few items first to get a style summary!"
      );
      setModalTitle("Ooops!");
      setShowModal(true);
      return;
    }

    setIsLoading(true);
    setError("");
    setModalTitle("Your Style Summary");
    setShowModal(true);

    const likedNames = likedItems.map((item) => item.name).join(", ");
    const prompt = `Based on this list of clothing items: "${likedNames}", what is my overall fashion style? Provide the output in a conversational tone and keep it concise.`;

    try {
      const text = await callGeminiAPI(prompt);
      setGeminiResponse(text);
    } catch (e) {
      console.error("Error fetching data:", e);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const renderCard = () => {
    if (currentIndex >= mockClothes.length) {
      return <EndOfItemsCard />;
    }

    const currentItem = mockClothes[currentIndex];
    return (
      <ClothingCard
        item={currentItem}
        isSwiping={isSwiping}
        swipeDirection={swipeDirection}
        swipeEffect={swipeEffect}
      />
    );
  };

  return (
    <div
      className="py-20 px-4 text-gray-100 bg-gray-950"
      style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px),
                   radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 2px, transparent 2px)`,
        backgroundSize: "50px 50px",
        backgroundPosition: "0 0, 25px 25px",
      }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Try the Swiping Prototype</h2>
        <p className="text-gray-400 mb-12">
          Experience the core of{" "}
          <span className="font-[Allura] text-2xl text-white">Revo's </span>{" "}
          "Tinder for fashion" a dynamic feel.
        </p>

        <div className="relative h-[500px] flex items-center justify-center mb-8">
          {renderCard()}
        </div>

        {currentIndex < mockClothes.length && (
          <SwipeButtons
            onSwipe={(direction) => handleSwipe(direction, setShowModal)}
            disabled={isSwiping}
          />
        )}

        <ActionButtons
          onGetStylingAdvice={getStylingAdvice}
          onSummarizeStyle={summarizeStyle}
          isLoading={isLoading}
        />

        <LikedItemsSection likedItems={likedItems} />
      </div>
    </div>
  );
};

export default PrototypePage;
