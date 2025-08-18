import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Shoe = (props) => {
  const { nodes, materials } = useGLTF("/assests/leather_shoes.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.461}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane050__0.geometry}
            material={materials.RootNode}
            position={[33.331, 53.719, 65.551]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/assests/leather_shoes.glb");
export default Shoe;
