import { Heart, Repeat, Shirt, Users, Zap } from "lucide-react";

const AboutPage = () => {
  return (
    <div
      className="py-20 px-4 bg-gray-950 text-white"
      style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.05) 2px, transparent 2px),
                   radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 2px, transparent 2px)`,
        backgroundSize: "50px 50px",
        backgroundPosition: "0 0, 25px 25px",
      }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4 font-[Allura] text-[#40bcd0]">
          The Revo Way
        </h2>
        <p className="mt-1 mb-16 text-sm text-gray-400 italic text-center">
          — Vision by{" "}
          <span className="font-[Borela] font-bold text-xl text-gray-300">
            Shaikh Haamid Raza
          </span>
          , Founder & CEO of Revo
        </p>

        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="flex flex-col items-center">
            <div className="p-6 rounded-full bg-green-500 text-green-100 mb-4 shadow-lg transition-transform transform hover:scale-105">
              <Zap size={48} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sustainable Fashion</h3>
            <p className="text-gray-400 max-w-xs">
              Reduce waste and environmental impact by giving clothes a second
              life.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-6 rounded-full bg-blue-500 text-blue-100 mb-4 shadow-lg transition-transform transform hover:scale-105">
              <Users size={48} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community Focused</h3>
            <p className="text-gray-400 max-w-xs">
              Connect with a local community of fashion lovers right in your
              city.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-6 rounded-full bg-yellow-500 text-yellow-100 mb-4 shadow-lg transition-transform transform hover:scale-105">
              <Heart size={48} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Personal Style</h3>
            <p className="text-gray-400 max-w-xs">
              Our matching algorithm helps you discover items that truly fit
              your unique style.
            </p>
          </div>
        </div>

        <div className="h-1 w-40 mx-auto mb-20 rounded-full bg-gradient-to-r from-[#277a68] via-[#5cbaa2] to-[#b2e9ef]"></div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-[#40bcd0] font-mono">Our Mission</h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            At{" "}
            <span className="text-[#79cfb6] font-[Allura] text-3xl font-semibold">
              Revo
            </span>
            , we believe fashion should be sustainable, accessible, and fun. Our
            mission is to give your wardrobe a second life by making it effortless
            to swap, share, and shine - while reducing waste and building a
            community of conscious trendsetters.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
