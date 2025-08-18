import { useFrame } from "@react-three/fiber";
import { useRef, useMemo, useState, useEffect } from "react";
import Shirt from "./Shirt";
import Shoe from "./Shoe";
import Hat from "./StrawHat";

const AnimatedClothingItems = () => {
  const shirtRef = useRef();
  const shoeRef = useRef();
  const hatRef = useRef();
  const [animationComplete, setAnimationComplete] = useState(false);

  // Pre-calculate positions to avoid repeated calculations
  const positions = useMemo(
    () => ({
      phoneCenter: { x: -0.6, y: -10.8, z: -5.2 },
      shirt: { x: -8.5, y: -2.2, z: 5.7 },
      shoe: { x: 8.3, y: -9.1, z: 1.9 },
      hat: { x: 8.5, y: 9.2, z: 0.0 },
    }),
    []
  );

  const scales = useMemo(
    () => ({
      shirt: 6.2,
      shoe: 0.01,
      hat: 3,
    }),
    []
  );

  // Optimized easing function
  const easeOutCubic = useMemo(() => (t) => 1 - Math.pow(1 - t, 3), []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const spawnDuration = 2;
    const progress = Math.min(time / spawnDuration, 1);

    // Mark animation as complete to reduce calculations
    if (progress >= 1 && !animationComplete) {
      setAnimationComplete(true);
    }

    const animationProgress = easeOutCubic(progress);

    // Shirt Animation
    if (shirtRef.current) {
      if (progress < 1) {
        // Spawn animation
        shirtRef.current.position.x =
          positions.phoneCenter.x +
          (positions.shirt.x - positions.phoneCenter.x) * animationProgress;
        shirtRef.current.position.y =
          positions.phoneCenter.y +
          (positions.shirt.y - positions.phoneCenter.y) * animationProgress;
        shirtRef.current.position.z =
          positions.phoneCenter.z +
          (positions.shirt.z - positions.phoneCenter.z) * animationProgress;

        const scale = scales.shirt * animationProgress;
        shirtRef.current.scale.set(scale, scale, scale);
      } else {
        // Post-spawn animation (reduced frequency)
        const postTime = time - spawnDuration;
        shirtRef.current.rotation.y = postTime * 0.2;
        shirtRef.current.position.y =
          positions.shirt.y + Math.sin(postTime * 0.4) * 0.1;
      }
    }

    // Shoe Animation
    if (shoeRef.current) {
      if (progress < 1) {
        shoeRef.current.position.x =
          positions.phoneCenter.x +
          (positions.shoe.x - positions.phoneCenter.x) * animationProgress;
        shoeRef.current.position.y =
          positions.phoneCenter.y +
          (positions.shoe.y - positions.phoneCenter.y) * animationProgress;
        shoeRef.current.position.z =
          positions.phoneCenter.z +
          (positions.shoe.z - positions.phoneCenter.z) * animationProgress;

        const scale = scales.shoe * animationProgress;
        shoeRef.current.scale.set(scale, scale, scale);
      } else {
        // Reduced animation frequency
        const postTime = time - spawnDuration;
        shoeRef.current.rotation.z = 0.2 + Math.cos(postTime * 0.4) * 0.3;
      }
    }

    // Hat Animation
    if (hatRef.current) {
      if (progress < 1) {
        hatRef.current.position.x =
          positions.phoneCenter.x +
          (positions.hat.x - positions.phoneCenter.x) * animationProgress;
        hatRef.current.position.y =
          positions.phoneCenter.y +
          (positions.hat.y - positions.phoneCenter.y) * animationProgress;
        hatRef.current.position.z =
          positions.phoneCenter.z +
          (positions.hat.z - positions.phoneCenter.z) * animationProgress;

        const scale = scales.hat * animationProgress;
        hatRef.current.scale.set(scale, scale, scale);
      } else {
        // Reduced animation frequency
        const postTime = time - spawnDuration;
        hatRef.current.rotation.y = 0.1 + postTime * 0.25;
        hatRef.current.position.y =
          positions.hat.y + Math.cos(postTime * 0.6) * 0.15;
      }
    }
  });

  return (
    <group>
      <Shirt
        ref={shirtRef}
        position={[
          positions.phoneCenter.x,
          positions.phoneCenter.y,
          positions.phoneCenter.z,
        ]}
        scale={0}
        rotation={[0, 0, 0]}
      />
      <Shoe
        ref={shoeRef}
        position={[
          positions.phoneCenter.x,
          positions.phoneCenter.y,
          positions.phoneCenter.z,
        ]}
        scale={0}
        rotation={[0.4, 0.1, 0.2]}
      />
      <Hat
        ref={hatRef}
        position={[
          positions.phoneCenter.x,
          positions.phoneCenter.y,
          positions.phoneCenter.z,
        ]}
        scale={0}
        rotation={[0.5, 0.1, 0]}
      />
    </group>
  );
};

export default AnimatedClothingItems;
