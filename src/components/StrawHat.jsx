import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Hat = (props) => {
  const { nodes, materials } = useGLTF("/assests/luffy_hat.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.line}
      />
    </group>
  );
};

useGLTF.preload("/assests/luffy_hat.glb");
export default Hat;
