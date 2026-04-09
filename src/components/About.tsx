import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { info, achievements } from '../data/portfolio'

function AnimatedCounter({ value, suffix = '' }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [display, setDisplay] = useState('0')
  const isDecimal = value.includes('.')
  const target = parseFloat(value)

  useEffect(() => {
    if (!inView) return
    let startTime: number
    const duration = 1600

    const tick = (now: number) => {
      if (!startTime) startTime = now
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = eased * target
      setDisplay(isDecimal ? current.toFixed(2) : String(Math.floor(current)))
      if (progress < 1) requestAnimationFrame(tick)
      else setDisplay(value)
    }
    requestAnimationFrame(tick)
  }, [inView, target, value, isDecimal])

  return <span ref={ref}>{display}{suffix}</span>
}

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      ref={ref}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* ── Flashy aurora background ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {/* Base */}
        <div style={{ position: 'absolute', inset: 0, background: 'var(--bg2)' }} />
        {/* Aurora blobs */}
        <div style={{
          position: 'absolute', top: '-20%', left: '-10%',
          width: 700, height: 700, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }} />
        <div style={{
          position: 'absolute', top: '10%', right: '-5%',
          width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.14) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-10%', left: '35%',
          width: 600, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 65%)',
          filter: 'blur(50px)',
        }} />
        {/* Mesh grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(139,92,246,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }} />
        {/* Top edge glow line */}
        <div style={{
          position: 'absolute', top: 0, left: '10%', right: '10%',
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.5), rgba(34,211,238,0.5), transparent)',
        }} />
        {/* Bottom edge glow line */}
        <div style={{
          position: 'absolute', bottom: 0, left: '10%', right: '10%',
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.3), transparent)',
        }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'start' }}>

          {/* ── Left column ── */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
          >
            <div>
              <div className="section-label">01. About Me</div>
              <h2 className="section-title">
                Who <span className="grad">I Am</span>
              </h2>
              <div className="divider" />
            </div>

            <p style={{ color: 'var(--text2)', fontSize: 16, lineHeight: 1.8 }}>
              I'm a <span style={{ color: 'var(--heading)', fontWeight: 600 }}>Computer Science student</span> in the{' '}
              <span style={{ color: 'var(--accent2)' }}>USF Honors College</span> maintaining a{' '}
              <span style={{ color: 'var(--accent3)', fontWeight: 700 }}>3.90 GPA</span>. I'm a{' '}
              <span style={{ color: 'var(--heading)', fontWeight: 600 }}>Green & Gold Presidential Scholar</span> and
              Dean's List student passionate about building systems that are both technically elegant and genuinely useful.
            </p>

            <p style={{ color: 'var(--text2)', fontSize: 16, lineHeight: 1.8 }}>
              I've interned at{' '}
              <span style={{ color: 'var(--heading)', fontWeight: 600 }}>Huawei Technologies</span>, served as a{' '}
              <span style={{ color: 'var(--accent)' }}>USF Student Government Senator</span>, and
              I'm currently building a serverless AWS cloud project. My interests span{' '}
              <span style={{ color: 'var(--accent2)' }}>AI/ML, cloud architecture, computer vision</span>, and
              systems programming.
            </p>

            <p style={{ color: 'var(--text2)', fontSize: 16, lineHeight: 1.8 }}>
              Outside of class I'm always hacking on something — whether that's an image processing pipeline,
              a data compression algorithm, or exploring Andrew Ng's ML Specialization on Coursera.
            </p>

            <div style={{ display: 'flex', gap: 14, marginTop: 4 }}>
              <a href={`mailto:${info.email}`} className="btn-primary">Say Hello</a>
              <a href={info.github} target="_blank" rel="noopener noreferrer" className="btn-outline">GitHub ↗</a>
            </div>
          </motion.div>

          {/* ── Right column ── */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
          >
            {/* Avatar */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: 160, height: 160 }}>
                {/* Spinning conic ring */}
                <div style={{
                  position: 'absolute', inset: -5,
                  borderRadius: '50%',
                  background: 'conic-gradient(from 0deg, #8b5cf6, #22d3ee, #f59e0b, #10b981, #8b5cf6)',
                  animation: 'rotate-slow 3.5s linear infinite',
                }} />
                {/* Gap ring */}
                <div style={{ position: 'absolute', inset: -1, borderRadius: '50%', background: 'var(--bg2)' }} />
                {/* Photo */}
                <div style={{
                  position: 'relative', width: '100%', height: '100%',
                  borderRadius: '50%', overflow: 'hidden', zIndex: 1,
                }}>
                  <img
                    src="/avatar.png"
                    alt="Moosa Abbasi"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={e => {
                      const el = e.target as HTMLImageElement
                      el.style.display = 'none'
                      const p = el.parentElement!
                      p.style.background = 'linear-gradient(135deg, #8b5cf6, #22d3ee)'
                      p.style.display = 'flex'
                      p.style.alignItems = 'center'
                      p.style.justifyContent = 'center'
                      p.innerHTML = '<span style="font-size:56px;font-weight:900;color:rgba(255,255,255,0.9)">M</span>'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {achievements.map(a => (
                <div
                  key={a.label}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(139,92,246,0.2)',
                    borderRadius: 'var(--radius)',
                    padding: '24px 16px',
                    textAlign: 'center',
                    backdropFilter: 'blur(12px)',
                    transition: 'border-color 0.3s, box-shadow 0.3s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(139,92,246,0.5)'
                    ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 28px rgba(139,92,246,0.15)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(139,92,246,0.2)'
                    ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                  }}
                >
                  <div style={{
                    fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800,
                    background: 'var(--grad)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                    lineHeight: 1, marginBottom: 8,
                  }}>
                    <AnimatedCounter value={a.value} suffix={a.suffix} />
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--text2)', fontFamily: 'var(--mono)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    {a.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick info card */}
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(139,92,246,0.18)',
              borderRadius: 'var(--radius-lg)',
              padding: 28,
              backdropFilter: 'blur(16px)',
              display: 'flex', flexDirection: 'column', gap: 16,
            }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--accent2)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 4 }}>
                Quick Info
              </div>
              {[
                { label: 'University', value: 'University of South Florida' },
                { label: 'Major',      value: 'Computer Science' },
                { label: 'College',    value: 'Honors College' },
                { label: 'Graduation', value: 'May 2027' },
                { label: 'Location',   value: info.location },
                { label: 'Email',      value: info.email },
              ].map(item => (
                <div key={item.label} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  paddingBottom: 12,
                  borderBottom: '1px solid rgba(139,92,246,0.08)',
                }}>
                  <span style={{ fontSize: 13, color: 'var(--text2)', fontFamily: 'var(--mono)' }}>{item.label}</span>
                  <span style={{ fontSize: 14, color: 'var(--heading)', fontWeight: 500 }}>{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
