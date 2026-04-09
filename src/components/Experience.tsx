import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experience } from '../data/portfolio'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>

      {/* Blue wavy image background */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'url(/experience-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundAttachment: 'fixed',
      }} />

      {/* Deep teal-to-dark overlay — distinct from purple Skills */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(160deg, rgba(2,8,20,0.92) 0%, rgba(0,30,40,0.85) 40%, rgba(10,5,30,0.92) 100%)',
      }} />

      {/* Accent glow: warm amber bottom-right */}
      <div style={{
        position: 'absolute', bottom: '-10%', right: '-5%', zIndex: 1,
        width: 560, height: 560, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245,158,11,0.13) 0%, transparent 65%)',
        filter: 'blur(40px)',
      }} />
      {/* Cool cyan top-left */}
      <div style={{
        position: 'absolute', top: '-5%', left: '-5%', zIndex: 1,
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 65%)',
        filter: 'blur(40px)',
      }} />

      {/* Edge fades */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 100, zIndex: 2, background: 'linear-gradient(to bottom, var(--bg), transparent)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 100, zIndex: 2, background: 'linear-gradient(to top, var(--bg2), transparent)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 56 }}
        >
          <div className="section-label">03. Experience</div>
          <h2 className="section-title">
            Where I've <span className="grad">Worked</span>
          </h2>
          <div className="divider" />
        </motion.div>

        <div style={{ position: 'relative', paddingLeft: 32 }}>
          {/* Vertical timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: 2,
              background: 'linear-gradient(180deg, var(--accent), var(--accent2), transparent)',
              transformOrigin: 'top',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i + 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{ position: 'relative' }}
              >
                {/* Dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: -39,
                    top: 22,
                    width: 14,
                    height: 14,
                    borderRadius: '50%',
                    background: exp.color,
                    boxShadow: `0 0 16px ${exp.color}88`,
                    border: `2px solid var(--bg2)`,
                  }}
                />

                {/* Card */}
                <div
                  style={{
                    background: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '28px 32px',
                    transition: 'border-color 0.3s, box-shadow 0.3s',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${exp.color}44`
                    ;(e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px ${exp.color}14`
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
                    ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                  }}
                >
                  {/* Left accent */}
                  <div
                    style={{
                      position: 'absolute',
                      left: 0, top: 0, bottom: 0,
                      width: 3,
                      background: exp.color,
                      borderRadius: '0 0 0 var(--radius-lg)',
                    }}
                  />

                  {/* Header row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
                    <div>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--heading)', marginBottom: 4 }}>
                        {exp.role}
                      </h3>
                      <div style={{ fontSize: 14, fontWeight: 600, color: exp.color }}>{exp.company}</div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                      <span
                        style={{
                          fontFamily: 'var(--mono)',
                          fontSize: 12,
                          color: 'var(--text2)',
                          background: 'rgba(255,255,255,0.04)',
                          padding: '3px 10px',
                          borderRadius: 4,
                          border: '1px solid rgba(255,255,255,0.06)',
                        }}
                      >
                        {exp.period}
                      </span>
                      <span className="chip cyan" style={{ fontSize: 11 }}>{exp.type}</span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, marginTop: 16 }}>
                    {exp.bullets.map(b => (
                      <li
                        key={b}
                        style={{
                          display: 'flex',
                          gap: 10,
                          fontSize: 14,
                          color: 'var(--text2)',
                          lineHeight: 1.65,
                        }}
                      >
                        <span style={{ color: exp.color, flexShrink: 0, fontFamily: 'var(--mono)', marginTop: 1 }}>›</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #experience .container > div:last-child { padding-left: 24px !important; }
        }
      `}</style>
    </section>
  )
}
