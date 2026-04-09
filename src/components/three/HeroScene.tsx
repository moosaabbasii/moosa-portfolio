import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Stars, Float } from '@react-three/drei'
import * as THREE from 'three'

/* ── Mouse-reactive group, offset to right side ── */
function SceneGroup({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null!)
  const mouse = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useFrame(() => {
    target.current.x += (mouse.current.x - target.current.x) * 0.03
    target.current.y += (mouse.current.y - target.current.y) * 0.025
    groupRef.current.rotation.y = target.current.x * 0.12
    groupRef.current.rotation.x = target.current.y * 0.08
  })

  return <group ref={groupRef}>{children}</group>
}

/* ── Main glowing node — less "orb", more abstract geometry ── */
function CoreShape() {
  const outerRef = useRef<THREE.Mesh>(null!)
  const innerRef = useRef<THREE.Mesh>(null!)
  const ringRef  = useRef<THREE.Mesh>(null!)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    outerRef.current.rotation.y = t * 0.12
    outerRef.current.rotation.x = t * 0.07
    innerRef.current.rotation.y = -t * 0.18
    innerRef.current.rotation.z = t * 0.1
    ringRef.current.rotation.z  = t * 0.22
    ringRef.current.rotation.x  = Math.sin(t * 0.3) * 0.4
  })

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.6}>
      {/* Inner solid */}
      <mesh ref={innerRef}>
        <dodecahedronGeometry args={[0.75, 0]} />
        <meshStandardMaterial
          color="#7c3aed"
          emissive="#5b21b6"
          emissiveIntensity={0.8}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      {/* Outer wireframe shell */}
      <mesh ref={outerRef} scale={1.55}>
        <icosahedronGeometry args={[0.75, 1]} />
        <meshBasicMaterial color="#a78bfa" wireframe transparent opacity={0.22} />
      </mesh>
      {/* Equatorial ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.5, 0.008, 6, 90]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.6} />
      </mesh>
    </Float>
  )
}

/* ── Orbiting small shapes ── */
function Orbiter({
  radius,
  speed,
  phase,
  color,
  size,
  shape,
}: {
  radius: number
  speed: number
  phase: number
  color: string
  size: number
  shape: 'ico' | 'oct' | 'tetra'
}) {
  const groupRef = useRef<THREE.Group>(null!)
  const meshRef  = useRef<THREE.Mesh>(null!)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + phase
    groupRef.current.position.x = Math.cos(t) * radius
    groupRef.current.position.y = Math.sin(t * 0.6) * radius * 0.45
    groupRef.current.position.z = Math.sin(t) * radius * 0.5
    meshRef.current.rotation.x += 0.012
    meshRef.current.rotation.y += 0.018
  })

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef}>
        {shape === 'ico'   && <icosahedronGeometry args={[size, 0]} />}
        {shape === 'oct'   && <octahedronGeometry  args={[size]} />}
        {shape === 'tetra' && <tetrahedronGeometry args={[size]} />}
        <meshBasicMaterial color={color} wireframe transparent opacity={0.6} />
      </mesh>
    </group>
  )
}

/* ── Atmospheric particle cloud ── */
function Particles({ count = 320 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null!)

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      // Spread particles more to the right/far half
      const r     = 2.5 + Math.random() * 7
      const theta = Math.random() * Math.PI * 2
      const phi   = Math.acos(2 * Math.random() - 1)
      pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
    }
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    return g
  }, [count])

  useFrame(({ clock }) => {
    pointsRef.current.rotation.y = clock.getElapsedTime() * 0.018
    pointsRef.current.rotation.x = clock.getElapsedTime() * 0.008
  })

  return (
    <points ref={pointsRef} geometry={geo}>
      <pointsMaterial size={0.022} color="#c4b5fd" transparent opacity={0.65} sizeAttenuation />
    </points>
  )
}

/* ── Distant ambient lines (depth feel) ── */
function GridLines() {
  const ref = useRef<THREE.LineSegments>(null!)

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    const verts: number[] = []
    const size = 14
    const divisions = 10
    const step = size / divisions
    for (let i = 0; i <= divisions; i++) {
      const x = -size / 2 + i * step
      verts.push(x, -size / 2, -6,  x, size / 2, -6)
      verts.push(-size / 2, x, -6, size / 2, x, -6)
    }
    g.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3))
    return g
  }, [])

  useFrame(({ clock }) => {
    ref.current.rotation.z = clock.getElapsedTime() * 0.012
  })

  return (
    <lineSegments ref={ref} geometry={geo}>
      <lineBasicMaterial color="#8b5cf6" transparent opacity={0.055} />
    </lineSegments>
  )
}

/* ── Camera ── */
function CameraSetup() {
  const { camera } = useThree()
  useEffect(() => { camera.position.set(0, 0, 7) }, [camera])
  return null
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      style={{ width: '100%', height: '100%' }}
    >
      <CameraSetup />

      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]}   intensity={3}   color="#8b5cf6" />
      <pointLight position={[-3, -3, 3]} intensity={2}   color="#22d3ee" />
      <pointLight position={[0, 8, -3]}  intensity={1.2} color="#f59e0b" />

      <Stars radius={90} depth={60} count={3500} factor={2.8} saturation={0.2} fade speed={0.6} />

      <GridLines />

      <SceneGroup>
        <CoreShape />
        <Particles />

        <Orbiter radius={2.8} speed={0.35} phase={0}             color="#a78bfa" size={0.22} shape="ico"   />
        <Orbiter radius={2.2} speed={0.5}  phase={Math.PI * 0.7} color="#22d3ee" size={0.18} shape="oct"   />
        <Orbiter radius={3.4} speed={0.25} phase={Math.PI * 1.3} color="#f59e0b" size={0.15} shape="tetra" />
        <Orbiter radius={2.6} speed={0.42} phase={Math.PI * 1.9} color="#f43f5e" size={0.14} shape="oct"   />
        <Orbiter radius={3.8} speed={0.2}  phase={Math.PI * 0.4} color="#34d399" size={0.12} shape="ico"   />
      </SceneGroup>
    </Canvas>
  )
}
