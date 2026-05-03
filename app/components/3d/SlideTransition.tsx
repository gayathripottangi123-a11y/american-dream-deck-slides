'use client'

import { Canvas } from '@react-three/fiber'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function RotatingCard({ isTransitioning }: { isTransitioning: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current && isTransitioning) {
      meshRef.current.rotation.y += 0.05
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 3, 0.1]} />
      <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
    </mesh>
  )
}

export default function SlideTransition({ isTransitioning }: { isTransitioning: boolean }) {
  if (!isTransitioning) return null

  return (
    <div className="absolute inset-0 z-50 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <RotatingCard isTransitioning={isTransitioning} />
      </Canvas>
    </div>
  )
}