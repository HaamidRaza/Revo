import { useState } from 'react';

export const useSwipeLogic = (items) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedItems, setLikedItems] = useState([]);
  const [isSwiping, setIsSwiping] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [swipeEffect, setSwipeEffect] = useState(null);

  const handleSwipe = (direction, setShowModal) => {
    setIsSwiping(true);
    setSwipeDirection(direction);
    setSwipeEffect(direction);
    setShowModal(false);
    
    setTimeout(() => {
      if (direction === "left") {
        setLikedItems((prevLiked) => [...prevLiked, items[currentIndex]]);
      }
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setIsSwiping(false);
      setSwipeDirection(null);
      setSwipeEffect(null);
    }, 500);
  };

  return {
    currentIndex,
    likedItems,
    isSwiping,
    swipeDirection,
    swipeEffect,
    handleSwipe,
  };
};