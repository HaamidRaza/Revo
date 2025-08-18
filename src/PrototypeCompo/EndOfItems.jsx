const EndOfItemsCard = () => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-gray-200 p-8 rounded-2xl shadow-xl max-w-sm w-full mx-auto"
      style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0,0,0,0.2) 2px, transparent 2px),
                   radial-gradient(circle at 75% 75%, rgba(0,0,0,0.2) 2px, transparent 2px)`,
        backgroundSize: "50px 50px",
        backgroundPosition: "0 0, 25px 25px",
      }}
    >
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        That's all for today!
      </h2>
      <p className="text-gray-800 text-center">
        You've seen all the items. Check back later for more fashion swaps!
      </p>
    </div>
  );
};

export default EndOfItemsCard;
