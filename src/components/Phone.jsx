import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

const Phone = (props) => {
  const { nodes, materials } = useGLTF("/assests/iphone_12_pro.glb");
  const screenTexture = useTexture("/textures/Screen.png");
  // ensure image fits correctly on screen
  screenTexture.wrapS = screenTexture.wrapT = THREE.ClampToEdgeWrapping;
  screenTexture.minFilter = THREE.LinearFilter;
  screenTexture.magFilter = THREE.LinearFilter;

  // if you want to auto-crop / fit aspect ratio:
  const imageAspect = screenTexture.image.width / screenTexture.image.height;
  const screenAspect = 1170 / 2532; // iPhone 12 screen resolution ratio

  if (imageAspect > screenAspect) {
    // image is wider → crop width
    screenTexture.repeat.set(screenAspect / imageAspect, 1);
    screenTexture.offset.set((1 - screenTexture.repeat.x) / 2, 0);
  } else {
    // image is taller → crop height
    screenTexture.repeat.set(1, imageAspect / screenAspect);
    screenTexture.offset.set(0, (1 - screenTexture.repeat.y) / 2);
  }
  return (
    <group {...props} dispose={null}>
      <group position={[0, -2.588, 2.419]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.iPhone__12_Pro_BodyFrame_0.geometry}
              material={materials.BodyFrame}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.iPhone__12_Pro_MicrophoneSpeaker_0.geometry}
              material={materials.MicrophoneSpeaker}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.iPhone__12_Pro_GrayGlossy2_0.geometry}
              material={materials.GrayGlossy2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.iPhone__12_Pro_Antenna_0.geometry}
              material={materials.Antenna}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.iPhone12_Pro_Body_0.geometry}
              material={materials.Body}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera1_PacificBlue_0.geometry}
              material={materials.PacificBlue}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera1_GrayGlossy_0.geometry}
              material={materials.GrayGlossy}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera1_FrontCamera_0.geometry}
              material={materials.FrontCamera}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera1_Blackmatte_0.geometry}
              material={materials.Blackmatte}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera1_Cameralens_0.geometry}
              material={materials.Cameralens}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera1_Glass_0.geometry}
              material={materials.Glass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Flash_Flash2_0.geometry}
              material={materials.Flash2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Flash_Flash_0.geometry}
              material={materials.Flash}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.LiDar_LiDar__0.geometry}
              material={materials.LiDar}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Bezel_bezel_0.geometry}
              material={materials.bezel}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.FrontCamera_Cameralens_0.geometry}
              material={materials.Cameralens}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.FrontCamera_FrontCamera_0.geometry}
              material={materials.FrontCamera}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.FrontCamera_Glass_0.geometry}
              material={materials.Glass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.FrontMic_GrayGlossy2_0.geometry}
              material={materials.GrayGlossy2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.FrontMic_MicrophoneSpeaker_0.geometry}
              material={materials.MicrophoneSpeaker}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.FrontCamera001_bezel001_0.geometry}
              material={materials["bezel.001"]}
              position={[0, 0, -0.001]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera3_PacificBlue_0.geometry}
              material={materials.PacificBlue}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera3_GrayGlossy_0.geometry}
              material={materials.GrayGlossy}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera3_FrontCamera_0.geometry}
              material={materials.FrontCamera}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera3_Blackmatte_0.geometry}
              material={materials.Blackmatte}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera3_Cameralens_0.geometry}
              material={materials.Cameralens}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera3_Glass_0.geometry}
              material={materials.Glass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera2_PacificBlue_0.geometry}
              material={materials.PacificBlue}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera2_GrayGlossy_0.geometry}
              material={materials.GrayGlossy}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera2_FrontCamera_0.geometry}
              material={materials.FrontCamera}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera2_Blackmatte_0.geometry}
              material={materials.Blackmatte}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera2_Cameralens_0.geometry}
              material={materials.Cameralens}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera2_Glass_0.geometry}
              material={materials.Glass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Screen_Wallpaper_0.geometry}
              // material={materials.Wallpaper}
            >
              <meshBasicMaterial map={screenTexture} toneMapped={false} />
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Apple_Logo_Logo_0.geometry}
              material={materials.Logo}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.CameraModule001_Glass_0.geometry}
              material={materials.Glass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.CameraModule002_MicrophoneSpeaker_0.geometry}
              material={materials.MicrophoneSpeaker}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.VolumeButton_BodyFrame_0.geometry}
              material={materials.BodyFrame}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.PowerButton_BodyFrame_0.geometry}
              material={materials.BodyFrame}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Port_Blackmatte_0.geometry}
              material={materials.Blackmatte}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Port_BodyFrame_0.geometry}
              material={materials.BodyFrame}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.SimTray_Blackmatte_0.geometry}
              material={materials.Blackmatte}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.SimTray_BodyFrame_0.geometry}
              material={materials.BodyFrame}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MuteButton_BodyFrame_0.geometry}
              material={materials.BodyFrame}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/assests/iphone_12_pro.glb");
export default Phone;
