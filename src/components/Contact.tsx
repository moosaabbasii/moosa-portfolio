import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'
import { info } from '../data/portfolio'

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-pad"
      style={{
        padding: '140px 80px',
        background: 'linear-gradient(135deg, #130820 0%, #0a0614 60%, #0d0a1e 100%)',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Ambient orb — CSS only, no extra Three.js */}
      {/* Main massive glow */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1000, height: 800,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(124,58,237,0.22) 0%, rgba(99,102,241,0.10) 40%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />
      {/* Secondary blue bloom */}
      <div style={{
        position: 'absolute',
        top: '40%', left: '15%',
        width: 500, height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(59,130,246,0.08), transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <span style={{
          display: 'block',
          fontSize: 11, fontWeight: 600,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: 'rgba(167,139,250,0.8)',
          marginBottom: 28,
        }}>
          Contact
        </span>

        <h2 style={{
          fontSize: 'clamp(36px, 5vw, 68px)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.08,
          color: '#f8fafc',
          marginBottom: 20,
        }}>
          Let's work together.
        </h2>

        <p style={{
          fontSize: 17, lineHeight: 1.65,
          color: 'rgba(248,250,252,0.5)',
          maxWidth: 420, margin: '0 auto 52px',
        }}>
          Open to internships, research, and interesting projects.
          Reach out anytime.
        </p>

        <a
          href={`mailto:${info.email}`}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '14px 36px',
            background: '#fff', color: '#0a0a0f',
            borderRadius: 100, fontSize: 15, fontWeight: 600,
            marginBottom: 40, transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#fff' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#0a0a0f' }}
        >
          <FiMail size={17} /> {info.email}
        </a>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
          {[
            { icon: FiGithub,   label: 'GitHub',   href: info.github },
            { icon: FiLinkedin, label: 'LinkedIn', href: info.linkedin },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '10px 22px',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 100, fontSize: 14, fontWeight: 500,
                color: 'rgba(248,250,252,0.6)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.color = '#f8fafc' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(248,250,252,0.6)' }}
            >
              <Icon size={15} /> {label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
