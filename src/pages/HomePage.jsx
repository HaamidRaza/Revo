import { lazy, Suspense, useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

// Lazy load ALL 3D components to reduce initial bundle
const Canvas = lazy(() =>
  import("@react-three/fiber").then((module) => ({ default: module.Canvas }))
);
const PerspectiveCamera = lazy(() =>
  import("@react-three/drei").then((module) => ({
    default: module.PerspectiveCamera,
  }))
);
const Phone = lazy(() => import("../components/Phone"));
const HeroCamera = lazy(() => import("../components/HeroCamera"));
const AnimatedClothingItems = lazy(() =>
  import("../components/AnimatedModals")
);

// Lightweight loading component
const Simple3DLoader = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="animate-pulse">
      <div className="w-32 h-48 bg-gradient-to-b from-[#25a4bb]/30 to-[#40bcd0]/20 rounded-xl border border-[#218199]/30"></div>
    </div>
  </div>
);

// Fallback for when 3D fails to load
const Static3DFallback = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="relative">
      <div className="w-40 h-60 bg-gradient-to-b from-[#21687d]/30 to-[#40bcd0]/30 rounded-xl border-2 border-[#218199]/50 shadow-2xl">
        <div className="absolute inset-2 bg-gray-900 rounded-lg flex items-center justify-center">
          <div className="text-2xl">📱</div>
        </div>
      </div>
      <div className="absolute -top-4 -right-4 animate-bounce">👕</div>
      <div className="absolute -bottom-4 -left-4 animate-bounce delay-300">
        👗
      </div>
    </div>
  </div>
);

const HomePage = () => {
  const isMobile = useMediaQuery({ maxWidth: 760 });
  const navigate = useNavigate();
  const [show3D, setShow3D] = useState(false);
  const [render3D, setRender3D] = useState(false);

  // Progressive loading: Show basic content first, then 3D
  useEffect(() => {
    // Show 3D after a short delay to let the page load first
    const timer1 = setTimeout(() => setShow3D(true), 500);
    const timer2 = setTimeout(() => setRender3D(true), 1000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen p-4 mt-5 text-center bg-gray-950 text-white overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 3px, transparent 2px),
                   radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 3px, transparent 2px)`,
        backgroundSize: "50px 50px",
        backgroundPosition: "0 0, 25px 25px",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[url('https://placehold.co/1200x800/1e293b/e2e8f0?text=Rewear.+Refresh.+Revo.')]  bg-cover bg-center opacity-10"></div>

      {/* Main Content - Loads First */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full w-full max-w-4xl">
        <div className="lg:mb-40 md:mb-16 mb-100 relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow-lg">
            Your <span className="font-[Borel] text-transparent bg-clip-text bg-gradient-to-br from-[#2c816d] via-[#6dbba5] to-[#79cfb6]">Wardrobe's</span> Next Chapter.
          </h1>
        </div>

        <div className="lg:mt-109 md:mt-16 relative z-10 mb-1">
          <p className="text-lg md:text-xl lg:text-3xl font-[Allura] font-bold">
            Swipe, Match, Swap.
          </p>
        </div>
      </div>

      {/* CTA Button - Always visible and fast */}
      <button
        onClick={() => navigate("/prototype")}
        className="relative z-70 px-6 py-3 rounded-2xl border-2 border-[#79cfb6] hover:bg-[#79cfb6] text-lg font-semibold shadow-md shadow-[#abe4d2]/40 transition-transform transform hover:scale-105 cursor-pointer"
      >
        Try the Prototype
      </button>

      {/* 3D Canvas - Loads After Main Content */}
      <div className="w-full absolute inset-0 flex justify-center items-center z-50 pointer-events-none">
        <div className="w-[90%] h-[400px] sm:h-[500px] md:h-[600px] lg:h-full max-w-4xl pointer-events-auto">
          {!show3D ? (
            // Show nothing initially for fastest load
            <div className="w-full h-full" />
          ) : !render3D ? (
            // Show lightweight fallback while 3D loads
            <Static3DFallback />
          ) : (
            // Load actual 3D scene
            <Suspense fallback={<Simple3DLoader />}>
              <Canvas className="w-full h-full">
                <Suspense fallback={null}>
                  <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                  <HeroCamera isMobile={isMobile}>
                    <Phone
                      position={
                        isMobile ? [2, -16, -18.3] : [-0.6, -10.8, -5.2]
                      }
                      rotation={[-0.5, 0, 0]}
                      scale={isMobile ? 0.5 : 0.25}
                    /> 
                  </HeroCamera>
                  <AnimatedClothingItems />
                  <ambientLight intensity={1.5} />
                  <directionalLight position={[5, 10, 10]} intensity={1} />
                </Suspense>
              </Canvas>
            </Suspense>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
