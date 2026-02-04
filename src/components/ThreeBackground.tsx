'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Stars as DreiStars } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField(props: any) {
  const ref = useRef<any>(null);

  const [positions, colors] = useMemo(() => {
    const count = 3000;
    const radius = 2.5;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      const r = radius * Math.cbrt(Math.random());
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Color gradient from cyan to blue
      color.setHSL(0.5 + Math.random() * 0.2, 0.8, 0.6);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return [positions, colors];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          vertexColors
          size={0.008}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

function FloatingGrid() {
  return (
    <group rotation={[Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <gridHelper args={[20, 20, 0x00f0ff, 0x111111]} />
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[#050505]">
      <Canvas camera={{ position: [0, 0, 3], fov: 60 }} gl={{ antialias: true }}>
        <fog attach="fog" args={['#050505', 3, 10]} />
        <ambientLight intensity={0.5} />
        <ParticleField />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <DreiStars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </Float>
      </Canvas>
    </div>
  );
}
