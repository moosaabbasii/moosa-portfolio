import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { info, achievements, coursework } from '../data/portfolio'

function useCountUp(target: number, decimals: number, inView: boolean) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(parseFloat((eased * target).toFixed(decimals)))
      if (progress < 1) requestAnimationFrame(tick)
      else setValue(target)
    }
    requestAnimationFrame(tick)
  }, [inView, target, decimals])

  return decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toString()
}

const statMeta = [
  { color: '#7c3aed' },
  { color: '#7c3aed' },
  { color: '#7c3aed' },
]

function StatCard({ a, inView, delay, meta }: { a: typeof achievements[number]; inView: boolean; delay: number; meta: typeof statMeta[number] }) {
  const isDecimal = a.value.includes('.')
  const numeric = parseFloat(a.value)
  const count = useCountUp(numeric, isDecimal ? 2 : 0, inView)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      style={{
        padding: '28px 24px',
        background: '#fff',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle top accent */}
      <p style={{
        fontSize: 48, fontWeight: 800, letterSpacing: '-0.03em',
        color: meta.color, lineHeight: 1, marginBottom: 8,
      }}>
        {count}{a.suffix}
      </p>
      <p style={{ fontSize: 13, color: 'var(--text3)', fontWeight: 500 }}>{a.label}</p>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      ref={ref}
      className="section-pad"
      style={{ padding: '120px 80px', background: '#f5f6ff' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 72 }}>
        <span className="section-label">About</span>
        <div className="divider" />
      </div>

      <div
        className="about-grid"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}
      >
        {/* Left: bio */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 style={{
            fontSize: 'clamp(32px, 3.5vw, 50px)',
            fontWeight: 800, lineHeight: 1.15,
            letterSpacing: '-0.025em', marginBottom: 24,
          }}>
            CS student by semester,{' '}
            <span style={{ color: 'var(--accent)' }}>engineer by mindset.</span>
          </h2>

          <p style={{ fontSize: 16, color: 'var(--text2)', lineHeight: 1.8, marginBottom: 20 }}>
            {info.bio}
          </p>
          <p style={{ fontSize: 16, color: 'var(--text2)', lineHeight: 1.8, marginBottom: 24 }}>
            Studying Computer Science at the University of South Florida Honors College.
            Former Huawei intern. Building cloud-native systems, AI tools, and sustainability research on the side.
          </p>

          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text3)', textTransform: 'uppercase', marginBottom: 10 }}>
              Relevant Coursework
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {coursework.map(c => (
                <span key={c} style={{
                  fontSize: 12, padding: '4px 12px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 100,
                  color: 'var(--text2)', fontWeight: 500,
                }}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: counting stats */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, position: 'relative' }}>
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500, height: 400, borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(124,58,237,0.07), transparent 70%)',
            filter: 'blur(60px)', pointerEvents: 'none',
          }} />
          {achievements.map((a, i) => (
            <StatCard key={i} a={a} inView={inView} delay={0.15 + i * 0.1} meta={statMeta[i]} />
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            style={{
              padding: '28px 24px',
              background: 'var(--accent)',
              borderRadius: 'var(--radius-lg)',
              gridColumn: 'span 2',
            }}
          >
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginBottom: 6, fontWeight: 500 }}>
              Currently enrolled at
            </p>
            <p style={{ fontSize: 18, fontWeight: 700, color: '#fff', letterSpacing: '-0.01em' }}>
              USF Honors College · Computer Science
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
