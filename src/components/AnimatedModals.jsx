import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import Shirt from "./Shirt";
import Shoe from "./Shoe";
import Hat from "./StrawHat";

const AnimatedClothingItems = () => {
  const shirtRef = useRef();
  const shoeRef = useRef();
  const hatRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Animation duration for the initial spawn effect
    const spawnDuration = 2; // 2 seconds
    const progress = Math.min(time / spawnDuration, 1); // 0 to 1

    // Easing function for smooth animation
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
    const animationProgress = easeOutCubic(progress);

    // Phone center position (where items spawn from)
    const phoneCenterX = -0.6;
    const phoneCenterY = -10.8;
    const phoneCenterZ = -5.2;

    // Final positions
    const shirtFinalPos = [-8.5, -2.2, 5.7];
    const shoeFinalPos = [8.3, -9.1, 1.9];
    const hatFinalPos = [8.5, 9.2, 0.0];

    if (shirtRef.current) {
      if (progress < 1) {
        // Spawn animation: move from phone center to final position
        shirtRef.current.position.x =
          phoneCenterX + (shirtFinalPos[0] - phoneCenterX) * animationProgress;
        shirtRef.current.position.y =
          phoneCenterY + (shirtFinalPos[1] - phoneCenterY) * animationProgress;
        shirtRef.current.position.z =
          phoneCenterZ + (shirtFinalPos[2] - phoneCenterZ) * animationProgress;

        // Scale animation for spawn effect
        const scale = 6.2 * animationProgress;
        shirtRef.current.scale.set(scale, scale, scale);
      } else {
        // After spawn animation: continue with rotation and floating
        shirtRef.current.rotation.y = (time - spawnDuration) * 0.2;
        shirtRef.current.position.y =
          shirtFinalPos[1] + Math.sin((time - spawnDuration) * 0.4) * 0.1;
      }
    }

    if (shoeRef.current) {
      if (progress < 1) {
        // Spawn animation: move from phone center to final position
        shoeRef.current.position.x =
          phoneCenterX + (shoeFinalPos[0] - phoneCenterX) * animationProgress;
        shoeRef.current.position.y =
          phoneCenterY + (shoeFinalPos[1] - phoneCenterY) * animationProgress;
        shoeRef.current.position.z =
          phoneCenterZ + (shoeFinalPos[2] - phoneCenterZ) * animationProgress;

        // Scale animation for spawn effect
        const scale = 0.01 * animationProgress;
        shoeRef.current.scale.set(scale, scale, scale);
      } else {
        // After spawn animation: continue with rotation
        shoeRef.current.rotation.z =
          0.2 + Math.cos((time - spawnDuration) * 0.4) * 0.3;
      }
    }

    if (hatRef.current) {
      if (progress < 1) {
        // Spawn animation: move from phone center to final position
        hatRef.current.position.x =
          phoneCenterX + (hatFinalPos[0] - phoneCenterX) * animationProgress;
        hatRef.current.position.y =
          phoneCenterY + (hatFinalPos[1] - phoneCenterY) * animationProgress;
        hatRef.current.position.z =
          phoneCenterZ + (hatFinalPos[2] - phoneCenterZ) * animationProgress;

        // Scale animation for spawn effect
        const scale = 3 * animationProgress;
        hatRef.current.scale.set(scale, scale, scale);
      } else {
        // After spawn animation: continue with rotation and floating
        hatRef.current.rotation.y = 0.1 + (time - spawnDuration) * 0.25;
        hatRef.current.position.y =
          hatFinalPos[1] + Math.cos((time - spawnDuration) * 0.6) * 0.15;
      }
    }
  });

  return (
    <group>
      <Shirt
        ref={shirtRef}
        position={[-0.6, -10.8, -5.2]} // Start at phone center
        scale={0} // Start invisible
        rotation={[0, 0, 0]}
      />
      <Shoe
        ref={shoeRef}
        position={[-0.6, -10.8, -5.2]} // Start at phone center
        scale={0} // Start invisible
        rotation={[0.4, 0.1, 0.2]}
      />
      <Hat
        ref={hatRef}
        position={[-0.6, -10.8, -5.2]} // Start at phone center
        scale={0} // Start invisible
        rotation={[0.5, 0.1, 0]}
      />
    </group>
  );
};

export default AnimatedClothingItems;
