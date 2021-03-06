import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/iphone.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0, -0.01]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group scale={500}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body_Wallpaper_0.geometry}
              material={materials.Wallpaper}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body_Camera_Glass_0.geometry}
              material={nodes.Body_Camera_Glass_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body_Lens_0.geometry}
              material={nodes.Body_Lens_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body_Mic_0.geometry}
              material={nodes.Body_Mic_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body_Body_0.geometry}
              material={nodes.Body_Body_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body_Material_0.geometry}
              material={materials.Material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body_Bezel_0.geometry}
              material={materials.Bezel}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera_Glass_0.geometry}
              material={materials.Glass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera_Camera_Frame001_0.geometry}
              material={materials["Camera_Frame.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera_Mic_0.geometry}
              material={nodes.Camera_Mic_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera_Body_0.geometry}
              material={nodes.Camera_Body_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body001_Screen_Glass_0.geometry}
              material={materials.Screen_Glass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Button_Frame_0.geometry}
              material={nodes.Button_Frame_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle003_Frame_0.geometry}
              material={nodes.Circle003_Frame_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Apple_Logo_Logo_0.geometry}
              material={materials.Logo}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera001_Camera_Frame_0.geometry}
              material={materials.Camera_Frame}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera001_Gray_Glass_0.geometry}
              material={materials.Gray_Glass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera001_Port_0.geometry}
              material={nodes.Camera001_Port_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera001_Black_Glass_0.geometry}
              material={materials.Black_Glass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera001_Body_0.geometry}
              material={nodes.Camera001_Body_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera001_Flash_0.geometry}
              material={materials.Flash}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera001_Camera_Glass_0.geometry}
              material={nodes.Camera001_Camera_Glass_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera001_Lens_0.geometry}
              material={nodes.Camera001_Lens_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera003_Material002_0.geometry}
              material={materials["Material.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Frame_Antenna_0.geometry}
              material={materials.Antenna}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Frame_Frame_0.geometry}
              material={nodes.Frame_Frame_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Frame_Port_0.geometry}
              material={nodes.Frame_Port_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Frame_Frame2_0.geometry}
              material={materials.Frame2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Frame_Mic_0.geometry}
              material={nodes.Frame_Mic_0.material}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/iphone.gltf");