import { Heart, Repeat, Shirt, Users, Zap } from "lucide-react";
import React from "react";

const AboutPage = () => {
  return (
    <div
      className="py-20 px-4 bg-gray-950 text-white"
      style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px),
                   radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 2px, transparent 2px)`,
        backgroundSize: "50px 50px",
        backgroundPosition: "0 0, 25px 25px",
      }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="flex flex-col items-center">
            <div className="p-6 rounded-full bg-indigo-500 text-indigo-100 mb-4 shadow-lg transition-transform transform hover:scale-105">
              <Shirt size={48} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Upload Your Threads</h3>
            <p className="text-gray-500 max-w-xs">
              Snap photos of the clothes you're ready to swap. Give them a new
              life!
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-6 rounded-full bg-pink-500 text-pink-100 mb-4 shadow-lg transition-transform transform hover:scale-105">
              <Heart size={48} />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Swipe Right on Your Faves
            </h3>
            <p className="text-gray-500 max-w-xs">
              Browse local listings in a fun, intuitive way. Find items you
              love.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-6 rounded-full bg-purple-500 text-purple-100 mb-4 shadow-lg transition-transform transform hover:scale-105">
              <Repeat size={48} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Swap & Shine</h3>
            <p className="text-gray-500 max-w-xs">
              Match with other users and arrange a swap to refresh your style.
            </p>
          </div>
        </div>

        <h2 className="text-5xl font-bold mb-4 font-[Allura]">The Revo Way</h2>
        <p className="mt-1 mb-15 text-sm text-gray-400 italic text-center">
          — Vision by{" "}
          <span className="font-[Borela] font-bold text-xl text-gray-300">
            Shaikh Haamid Raza
          </span>
          , Founder & CEO of Revo
        </p>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <div className="p-6 rounded-full bg-green-500 text-green-100 mb-4 shadow-lg transition-transform transform hover:scale-105">
              <Zap size={48} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sustainable Fashion</h3>
            <p className="text-gray-500 max-w-xs">
              Reduce waste and environmental impact by giving clothes a second
              life.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-6 rounded-full bg-blue-500 text-blue-100 mb-4 shadow-lg transition-transform transform hover:scale-105">
              <Users size={48} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community Focused</h3>
            <p className="text-gray-600 max-w-xs">
              Connect with a local community of fashion lovers right in your
              city.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-6 rounded-full bg-yellow-500 text-yellow-100 mb-4 shadow-lg transition-transform transform hover:scale-105">
              <Heart size={48} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Personal Style</h3>
            <p className="text-gray-500 max-w-xs">
              Our matching algorithm helps you discover items that truly fit
              your unique style.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
