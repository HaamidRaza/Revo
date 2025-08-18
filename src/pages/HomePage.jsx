import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { PerspectiveCamera, Shadow } from "@react-three/drei";
import Phone from "../components/Phone";
import HeroCamera from "../components/HeroCamera";
import { useMediaQuery } from "react-responsive";
import AnimatedClothingItems from "../components/AnimatedModals";
import { useControls } from "leva";

const HomePage = ({ setCurrentPage }) => {
  const isMobile = useMediaQuery({ maxWidth: 760 });
  // const { posX, posY, posZ, rotX, rotY, rotZ } = useControls({
  //   posX: { value: 0, min: -10, max: 10, step: 0.1 },
  //   posY: { value: -7, min: -20, max: 20, step: 0.1 },
  //   posZ: { value: 0, min: -20, max: 10, step: 0.1 },
  //   rotX: { value: 0, min: -Math.PI, max: Math.PI, step: 0.1 },
  //   rotY: { value: 0, min: -Math.PI, max: Math.PI, step: 0.1 },
  //   rotZ: { value: 0, min: -Math.PI, max: Math.PI, step: 0.1 },
  // });
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen p-4 text-center bg-gray-950 text-white overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px),
                   radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 2px, transparent 2px)`,
        backgroundSize: "50px 50px",
        backgroundPosition: "0 0, 25px 25px",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[url('https://placehold.co/1200x800/1e293b/e2e8f0?text=Rewear.+Refresh.+Revo.')]  bg-cover bg-center opacity-10"></div>

      <div className="relative z-20 flex flex-col items-center justify-center h-full w-full max-w-4xl">
        <div className="lg:mb-40 md:mb-16 mb-100 relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow-lg">
            Your <span className="font-[Borel]">Wardrobe's</span> Next Chapter.
          </h1>
        </div>

        <div className="lg:mt-109 md:mt-16 relative z-10 mb-1">
          <p className="text-lg md:text-xl lg:text-3xl font-[Allura] font-bold">
            Swipe, Match, Swap.
          </p>
        </div>
      </div>

      <button
        onClick={() => setCurrentPage("prototype")}
        className="relative z-70 px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-700 text-lg font-semibold shadow-lg shadow-purple-500/40 transition-transform transform hover:scale-105 cursor-pointer"
      >
        Try the Prototype
      </button>
      {/* 3D Canvas */}
      <div className="w-full absolute inset-0 flex justify-center items-center z-50 pointer-events-none">
        <div className="w-[90%] h-[400px] sm:h-[500px] md:h-[600px] lg:h-full max-w-4xl pointer-events-auto">
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 30]} />
              <HeroCamera isMobile={isMobile}>
                <Phone
                  position={isMobile ? [2, -16, -18.3] : [-0.6, -10.8, -5.2]}
                  rotation={[-0.5, 0, 0]}
                  scale={isMobile ? 0.5 : 0.25}
                />
              </HeroCamera>
              <AnimatedClothingItems />
              <ambientLight intensity={1.5} />
              <directionalLight position={[5, 10, 10]} intensity={1} />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
