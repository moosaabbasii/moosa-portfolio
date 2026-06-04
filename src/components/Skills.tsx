import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills, certifications } from '../data/portfolio'

const allItems = skills.flatMap(g => g.items)
const mid = Math.ceil(allItems.length / 2)
const row1 = allItems.slice(0, mid)
const row2 = allItems.slice(mid)

function TickerRow({ items, direction = 1, speed = 28 }: { items: string[]; direction?: number; speed?: number }) {
  const doubled = [...items, ...items, ...items]
  return (
    <div style={{
      overflow: 'hidden',
      maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
      WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
    }}>
      <motion.div
        animate={{ x: direction > 0 ? ['0%', '-33.33%'] : ['-33.33%', '0%'] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
        style={{ display: 'flex', gap: 12, width: 'max-content' }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '7px 16px',
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 100,
              fontSize: 13, fontWeight: 500,
              color: 'rgba(255,255,255,0.65)',
              whiteSpace: 'nowrap',
            }}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        padding: '100px 0',
        background: '#080b14',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800, height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(124,58,237,0.18) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{ padding: '0 80px', marginBottom: 52, position: 'relative' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#a78bfa' }}>
            Tech Stack
          </span>
          <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }} />
        </div>

        <div style={{ marginTop: 24, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {skills.map(g => (
            <span key={g.category} style={{
              padding: '4px 14px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.10)',
              borderRadius: 100,
              fontSize: 12, fontWeight: 600,
              color: 'rgba(255,255,255,0.4)',
              letterSpacing: '0.04em',
            }}>
              {g.category}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Ticker rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, position: 'relative' }}>
        <TickerRow items={row1} direction={1}  speed={30} />
        <TickerRow items={row2} direction={-1} speed={25} />
      </div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{ padding: '52px 80px 0', position: 'relative' }}
      >
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: 20 }}>
          Certifications
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {certifications.map((cert) => (
            <div
              key={cert.title}
              style={{
                padding: '14px 20px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.10)',
                borderRadius: 16,
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
                maxWidth: 520,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#a78bfa', flexShrink: 0 }} />
                <span style={{ fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.9)' }}>{cert.title}</span>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginLeft: 'auto' }}>{cert.year}</span>
              </div>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', paddingLeft: 16 }}>{cert.issuer}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, paddingLeft: 16, marginTop: 2 }}>
                {cert.courses.map(c => (
                  <span key={c} style={{
                    fontSize: 11, padding: '2px 10px',
                    background: 'rgba(124,58,237,0.2)',
                    border: '1px solid rgba(124,58,237,0.3)',
                    borderRadius: 100,
                    color: '#c4b5fd', fontWeight: 500,
                  }}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
