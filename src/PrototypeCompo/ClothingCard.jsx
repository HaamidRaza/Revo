const ClothingCard = ({ item, isSwiping, swipeDirection, swipeEffect }) => {
  const bgClass = swipeEffect === 'right' ? 'bg-green-300' : swipeEffect === 'left' ? 'bg-red-300' : 'bg-white';
  const cardClass = `
    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    w-11/12 sm:w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl
    bg-white transition-transform duration-300 ease-in-out
    ${bgClass}
    ${
      isSwiping
        ? swipeDirection === "left"
          ? "rotate-12 translate-x-10"
          : "-rotate-12 -translate-x-full"
        : ""
    }
  `;

  return (
    <div className={cardClass}>
      <div className="w-full h-[400px] overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 bg-zinc-800">
        <h3 className="text-2xl font-bold text-gray-300 mb-2">
          {item.name}
        </h3>
        <p className="text-gray-400">{item.description}</p>
      </div>
    </div>
  );
};

export default ClothingCard;