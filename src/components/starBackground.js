import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const StarsBackground = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
      <Canvas>
        <Stars
          radius={100} // Radius of the stars
          depth={50} // Depth of the stars
          count={5000} // Number of stars
          factor={4} // Size factor
          saturation={0} // Saturation of the stars
          fade // Fade effect
        />
        <ambientLight intensity={0.5} />
      </Canvas>
    </div>
  );
};

export default StarsBackground;