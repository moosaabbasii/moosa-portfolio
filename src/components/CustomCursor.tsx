import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)
  const ringX = useMotionValue(-100)
  const ringY = useMotionValue(-100)

  const springX = useSpring(ringX, { stiffness: 120, damping: 22, mass: 0.6 })
  const springY = useSpring(ringY, { stiffness: 120, damping: 22, mass: 0.6 })

  const isHovering = useRef(false)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      dotX.set(e.clientX)
      dotY.set(e.clientY)
      ringX.set(e.clientX)
      ringY.set(e.clientY)
    }

    const handleEnter = () => { isHovering.current = true }
    const handleLeave = () => { isHovering.current = false }

    window.addEventListener('mousemove', move)

    const interactables = document.querySelectorAll('a, button, [data-hover]')
    interactables.forEach(el => {
      el.addEventListener('mouseenter', handleEnter)
      el.addEventListener('mouseleave', handleLeave)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', handleEnter)
        el.removeEventListener('mouseleave', handleLeave)
      })
    }
  }, [dotX, dotY, ringX, ringY])

  return (
    <>
      {/* Inner dot */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          zIndex: 9999,
          pointerEvents: 'none',
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #8b5cf6, #22d3ee)',
        }}
      />
      {/* Outer ring */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          zIndex: 9998,
          pointerEvents: 'none',
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '1.5px solid rgba(139, 92, 246, 0.6)',
          background: 'rgba(139, 92, 246, 0.04)',
        }}
      />
    </>
  )
}
