import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Shirt = (props) => {
  const { nodes, materials } = useGLTF("/assests/shirt.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Shirt00_1Button_FRONT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Shirt00_1Material4782}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Shirt00_1Material4782}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.Shirt00_1Material4782}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.Shirt00_1Material4782}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.Shirt00_1Material4782}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/assests/shirt.glb");
export default Shirt;
