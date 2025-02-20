import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import { useTexture } from '@react-three/drei';

// function Mars() {
//   const {scene} = useGLTF('./planet/scene.gltf');
//   <primitive 
//       object={scene}
//       scale={2.5}
//       position-y={0}
//       rotation-y={0}
//     />
// }

function Mars() {
  const marsRef = useRef();
  const texture = useTexture('./planet/textures/Material.001_baseColor.jpeg');

  // Rotate Mars
  useFrame(() => {
    marsRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={marsRef} position={[0, 0, 0]}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default function MarsModel() {
  return (
    <Canvas style={{ height: '100vh' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Mars />
      <OrbitControls />
      {/* <Stars /> */}
    </Canvas>
  );
}