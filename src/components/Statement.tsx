import { motion } from 'framer-motion'

export default function Statement() {
  return (
    <section style={{
      height: '75vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0f172a',
      padding: '0 80px',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Ambient glow */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 800, height: 400,
        background: 'radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}
      >
        <h2 style={{
          fontSize: 'clamp(44px, 8.5vw, 120px)',
          fontWeight: 900,
          letterSpacing: '-0.04em',
          lineHeight: 0.92,
          color: '#f8fafc',
        }}>
          I BUILD THINGS<br />
          THAT ACTUALLY<br />
          <span style={{ color: '#7c3aed' }}>SHIP.</span>
        </h2>
      </motion.div>
    </section>
  )
}
