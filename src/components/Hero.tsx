import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import HeroScene from './three/HeroScene'
import { info } from '../data/portfolio'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section className="dot-grid" style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '0 80px',
      position: 'relative',
      overflow: 'hidden',
      background: '#fafbff',
    }}>
      {/* ── Left: massive typography ── */}
      <div style={{ flex: '0 0 52%', zIndex: 2, position: 'relative' }}>
        <motion.p
          {...fadeUp(0)}
          style={{
            fontSize: 12, fontWeight: 700,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--accent)', marginBottom: 28,
          }}
        >
          Moosa Abbasi · USF · Tampa, FL
        </motion.p>

        <motion.h1
          {...fadeUp(0.08)}
          style={{
            fontSize: 'clamp(52px, 7.5vw, 108px)',
            fontWeight: 900,
            lineHeight: 0.93,
            letterSpacing: '-0.04em',
            color: 'var(--text)',
            marginBottom: 32,
          }}
        >
          BUILDING<br />
          SYSTEMS,<br />
          <span className="text-shimmer">AI &amp;</span><br />
          SOFTWARE
        </motion.h1>

        <motion.p
          {...fadeUp(0.18)}
          style={{
            fontSize: 16, color: 'var(--text2)',
            lineHeight: 1.7, maxWidth: 380,
            marginBottom: 40,
          }}
        >
          CS student at USF Honors College, 3.90 GPA.
          Building serverless cloud systems, AI research pipelines,
          and software that actually ships.
        </motion.p>

        <motion.div
          {...fadeUp(0.26)}
          style={{ display: 'flex', gap: 36, alignItems: 'center' }}
        >
          <a
            href="#projects"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              fontSize: 15, fontWeight: 700, color: 'var(--text)',
              letterSpacing: '-0.01em',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text)'}
          >
            View Projects <FiArrowRight size={16} />
          </a>
          <a
            href={info.resume}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 14, color: 'var(--text3)', fontWeight: 500, transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text2)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text3)'}
          >
            Resume ↗
          </a>
        </motion.div>

        {/* Social */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          style={{ display: 'flex', gap: 24, marginTop: 52 }}
        >
          {[
            { label: 'GitHub',   href: info.github },
            { label: 'LinkedIn', href: info.linkedin },
            { label: info.email, href: `mailto:${info.email}` },
          ].map(l => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 12, color: 'var(--text3)', fontWeight: 500, letterSpacing: '0.02em', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text3)'}
            >
              {l.label}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Purple light source */}
      <div style={{
        position: 'absolute',
        top: '-10%', right: '-5%',
        width: 1000, height: 1000,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 60% 40%, rgba(124,58,237,0.16), transparent 55%)',
        filter: 'blur(40px)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Bottom fade into About */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: 160,
        background: 'linear-gradient(to bottom, transparent, #f5f6ff)',
        pointerEvents: 'none', zIndex: 3,
      }} />

      {/* ── Right: 3D neural network ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.1 }}
        style={{
          position: 'absolute',
          right: -60,
          top: 0,
          width: '60%',
          height: '100%',
          zIndex: 1,
        }}
      >
        <HeroScene />
      </motion.div>
    </section>
  )
}
