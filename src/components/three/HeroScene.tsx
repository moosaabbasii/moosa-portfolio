import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, MeshTransmissionMaterial } from '@react-three/drei'
import * as THREE from 'three'

// ── Node positions for the glass neural network ──────────────────────────────
const NODES: [number, number, number][] = [
  [ 0.0,  0.0,  0.0],
  [ 1.7,  0.8, -0.5],
  [-1.4,  0.6,  0.2],
  [ 0.8, -1.4,  0.3],
  [-0.5, -0.9, -0.8],
  [ 2.0, -0.3,  0.6],
  [-1.7,  1.4, -0.2],
  [ 0.4,  1.7,  0.6],
  [-0.9, -0.3,  1.4],
  [ 1.3,  0.4, -1.4],
  [-0.3,  1.0, -1.6],
  [ 0.9, -0.7,  1.5],
]
const SIZES  = [0.18, 0.10, 0.12, 0.09, 0.13, 0.08, 0.11, 0.14, 0.09, 0.10, 0.11, 0.07]
const GLOW   = new Set([0, 5, 7]) // purple emissive nodes
const THRESH = 2.4               // connect if closer than this

// ── Edges as LineSegments ─────────────────────────────────────────────────────
function Edges() {
  const geo = useMemo(() => {
    const verts: number[] = []
    for (let i = 0; i < NODES.length; i++) {
      for (let j = i + 1; j < NODES.length; j++) {
        const [x1, y1, z1] = NODES[i], [x2, y2, z2] = NODES[j]
        const d = Math.sqrt((x2-x1)**2 + (y2-y1)**2 + (z2-z1)**2)
        if (d < THRESH) verts.push(x1,y1,z1, x2,y2,z2)
      }
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3))
    return g
  }, [])
  return (
    <lineSegments geometry={geo}>
      <lineBasicMaterial color="#7c3aed" transparent opacity={0.18} />
    </lineSegments>
  )
}

// ── Single node ───────────────────────────────────────────────────────────────
function Node({ pos, size, glow, i }: { pos: [number,number,number]; size: number; glow: boolean; i: number }) {
  return (
    <Float speed={1.2 + (i % 3) * 0.4} floatIntensity={0.2} rotationIntensity={0.05}>
      <mesh position={pos}>
        <sphereGeometry args={[size, 32, 32]} />
        {glow ? (
          <meshStandardMaterial color="#7c3aed" emissive="#7c3aed" emissiveIntensity={0.8} roughness={0.1} metalness={0.2} />
        ) : (
          <MeshTransmissionMaterial
            backside={false} samples={6}
            thickness={0.2} chromaticAberration={0.025}
            transmission={1} roughness={0.05} color="#f0f0ff"
          />
        )}
      </mesh>
    </Float>
  )
}

// ── Mouse-reactive wrapper ────────────────────────────────────────────────────
function Network() {
  const ref = useRef<THREE.Group>(null!)
  const mouse  = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const h = (e: MouseEvent) => {
      mouse.current.x =  (e.clientX / window.innerWidth  - 0.5) * 0.35
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 0.25
    }
    window.addEventListener('mousemove', h)
    return () => window.removeEventListener('mousemove', h)
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    target.current.x += (mouse.current.x - target.current.x) * 0.03
    target.current.y += (mouse.current.y - target.current.y) * 0.03
    ref.current.rotation.y = target.current.x * 0.7 + t * 0.025
    ref.current.rotation.x = target.current.y * 0.5
    // Slow breathing
    const breathe = 1 + Math.sin(t * 0.18) * 0.028
    ref.current.scale.setScalar(breathe)
  })

  return (
    <group ref={ref}>
      <Edges />
      {NODES.map((pos, i) => (
        <Node key={i} pos={pos} size={SIZES[i]} glow={GLOW.has(i)} i={i} />
      ))}
    </group>
  )
}

// ── Canvas export ─────────────────────────────────────────────────────────────
export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 6.5], fov: 40 }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.0} />
      <pointLight position={[0, 0, 3]} intensity={1.2} color="#7c3aed" />
      <Environment preset="studio" />
      <Network />
    </Canvas>
  )
}
