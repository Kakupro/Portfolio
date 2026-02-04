'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three'; // Import THREE

function Stars(props: any) {
  const ref = useRef<any>();
  
  const [sphere] = useMemo(() => {
     // Create a sphere of points
     const count = 5000;
     const radius = 1.5;
     const positions = new Float32Array(count * 3);
     for (let i = 0; i < count; i++) {
       const theta = 2 * Math.PI * Math.random();
       const phi = Math.acos(2 * Math.random() - 1);
       const x = radius * Math.sin(phi) * Math.cos(theta);
       const y = radius * Math.sin(phi) * Math.sin(theta);
       const z = radius * Math.cos(phi);
       
       // Add some randomness to spread them out slightly differently if needed, 
       // but strictly on sphere surface is good for the "galaxy" look
       positions[i * 3] = x;
       positions[i * 3 + 1] = y;
       positions[i * 3 + 2] = z;
     }
     return [positions]; 
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00f0ff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  );
}
