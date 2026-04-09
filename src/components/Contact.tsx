import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { info } from '../data/portfolio'

const contactItems = [
  { label: 'Email', value: info.email, href: `mailto:${info.email}`, color: '#22d3ee' },
  { label: 'GitHub', value: 'github.com/moosaabbasii', href: info.github, color: '#a78bfa' },
  { label: 'LinkedIn', value: 'linkedin.com/in/moosaabbasi', href: info.linkedin, color: '#60a5fa' },
  { label: 'Location', value: info.location, href: null, color: '#34d399' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>

      {/* Warm amber-violet gradient — unlike every other section */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: `
          radial-gradient(ellipse at 20% 30%,  rgba(245,158,11,0.2)  0%, transparent 55%),
          radial-gradient(ellipse at 80% 70%,  rgba(139,92,246,0.2)  0%, transparent 55%),
          radial-gradient(ellipse at 60% 10%,  rgba(244,63,94,0.1)   0%, transparent 45%),
          radial-gradient(ellipse at 10% 90%,  rgba(34,211,238,0.08) 0%, transparent 45%),
          #08060f
        `,
      }} />

      {/* Subtle diagonal lines texture */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        backgroundImage: 'repeating-linear-gradient(60deg, rgba(245,158,11,0.025) 0px, rgba(245,158,11,0.025) 1px, transparent 1px, transparent 40px)',
        pointerEvents: 'none',
      }} />

      {/* Central glow pulse */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', zIndex: 1,
        transform: 'translate(-50%, -50%)',
        width: 700, height: 700, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 65%)',
        filter: 'blur(30px)',
        pointerEvents: 'none',
      }} />

      {/* Edge fades */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 100, zIndex: 2, background: 'linear-gradient(to bottom, var(--bg), transparent)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, zIndex: 2, background: 'linear-gradient(to top, var(--bg), transparent)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 56, textAlign: 'center' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>05. Contact</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Get <span className="grad">In Touch</span>
          </h2>
          <div className="divider" style={{ margin: '20px auto 24px' }} />
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Open to internships, full-time roles, research collabs, and cool projects. My inbox is always open.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 40,
            alignItems: 'start',
          }}
        >
          {/* Left: CTA card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              padding: 36,
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top accent */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'var(--grad)' }} />

            <h3 style={{ fontSize: 22, fontWeight: 700, color: 'var(--heading)', lineHeight: 1.3 }}>
              Let's Build Something{' '}
              <span
                style={{
                  background: 'var(--grad)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Together
              </span>
            </h3>

            <p style={{ fontSize: 15, color: 'var(--text2)', lineHeight: 1.75 }}>
              Whether it's an internship opportunity, a collaborative project, or just a chat about
              tech — I'd love to connect. I respond within 24 hours.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href={`mailto:${info.email}`} className="btn-primary">
                Send Me an Email
                <span style={{ fontSize: 16 }}>✉</span>
              </a>
              <a
                href={info.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Connect on LinkedIn ↗
              </a>
            </div>
          </motion.div>

          {/* Right: contact cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.25 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
          >
            {contactItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.08 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 16,
                      background: 'var(--card)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius)',
                      padding: '16px 20px',
                      transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.borderColor = `${item.color}44`
                      el.style.transform = 'translateX(6px)'
                      el.style.boxShadow = `0 4px 24px ${item.color}14`
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.borderColor = 'var(--border)'
                      el.style.transform = 'translateX(0)'
                      el.style.boxShadow = 'none'
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        background: `${item.color}18`,
                        border: `1px solid ${item.color}30`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 18,
                        flexShrink: 0,
                      }}
                    >
                      {item.label === 'Email' ? '✉' : item.label === 'GitHub' ? '⌨' : item.label === 'LinkedIn' ? '💼' : '📍'}
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontFamily: 'var(--mono)', color: item.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 3 }}>
                        {item.label}
                      </div>
                      <div style={{ fontSize: 14, color: 'var(--text)', fontWeight: 500 }}>{item.value}</div>
                    </div>
                  </a>
                ) : (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 16,
                      background: 'var(--card)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius)',
                      padding: '16px 20px',
                    }}
                  >
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: `${item.color}18`, border: `1px solid ${item.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>
                      📍
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontFamily: 'var(--mono)', color: item.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 3 }}>
                        {item.label}
                      </div>
                      <div style={{ fontSize: 14, color: 'var(--text)', fontWeight: 500 }}>{item.value}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
