import React from 'react';
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

function AnimateSphere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial 
        color="#8352fd"
        attach="material"
        distort={0.3}
        speed={2.2}
        roughness={0}
      />
    </Sphere>
  )
}

export default AnimateSphere
