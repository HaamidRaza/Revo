import React from 'react';

const LikedItemsSection = ({ likedItems }) => {
  return (
    <div className="mt-12 w-full">
      <h2 className="text-3xl font-bold text-gray-200 mb-4 text-center">
        Your Liked Items
      </h2>
      {likedItems.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {likedItems.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-700 rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-32 object-cover"
              />
              <div className="p-3">
                <h4 className="font-semibold text-gray-400 truncate">
                  {item.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400">
          Swipe right on some items to see them here!
        </p>
      )}
    </div>
  );
};

export default LikedItemsSection;