import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../data/portfolio'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>

      {/* ── Background image layer ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'url(/skills-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',   /* subtle parallax feel */
      }} />

      {/* Dark overlay — keeps our theme, tints toward our palette */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(135deg, rgba(6,6,15,0.88) 0%, rgba(30,10,50,0.82) 50%, rgba(6,6,15,0.90) 100%)',
      }} />

      {/* Extra top/bottom section fades for seamless blending */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 100, zIndex: 2, background: 'linear-gradient(to bottom, var(--bg2), transparent)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 100, zIndex: 2, background: 'linear-gradient(to top, var(--bg), transparent)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 56 }}
        >
          <div className="section-label">02. Skills</div>
          <h2 className="section-title">
            My <span className="grad">Tech Stack</span>
          </h2>
          <div className="divider" />
          <p className="section-subtitle">
            Tools and technologies I use to build things — from algorithms to cloud infrastructure.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 20,
          }}
        >
          {skills.map(skill => (
            <motion.div
              key={skill.category}
              variants={cardVariant}
              style={{
                background: 'rgba(14,14,31,0.65)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
                border: '1px solid rgba(139,92,246,0.2)',
                borderRadius: 'var(--radius-lg)',
                padding: 28,
                transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.borderColor = `${skill.color}44`
                el.style.boxShadow = `0 8px 40px ${skill.color}14`
                el.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.borderColor = 'var(--border)'
                el.style.boxShadow = 'none'
                el.style.transform = 'translateY(0)'
              }}
            >
              {/* Top accent line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0,
                  height: 2,
                  background: `linear-gradient(90deg, ${skill.color}, ${skill.color}44)`,
                }}
              />

              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <span style={{ fontSize: 22 }}>{skill.icon}</span>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--heading)' }}>{skill.category}</h3>
              </div>

              {/* Skill items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {skill.items.map((item, i) => (
                  <div key={item}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                      <span style={{ fontSize: 13, color: 'var(--text)', fontFamily: 'var(--mono)' }}>{item}</span>
                    </div>
                    <div
                      style={{
                        height: 3,
                        background: 'rgba(255,255,255,0.06)',
                        borderRadius: 2,
                        overflow: 'hidden',
                      }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${88 - i * 5}%` } : {}}
                        transition={{ duration: 0.9, delay: 0.3 + i * 0.07, ease: 'easeOut' }}
                        style={{
                          height: '100%',
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                          borderRadius: 2,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Also familiar with */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ marginTop: 48 }}
        >
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--text2)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 16 }}>
            Also familiar with
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['GitHub Actions', 'AWS CloudWatch', 'AWS IAM', 'Streamlit', 'Linux', 'Matplotlib', 'scikit-learn', 'REST APIs', 'Agile / Scrum', 'Data Structures', 'OOP', 'Algorithms'].map(tag => (
              <motion.span
                key={tag}
                className="chip"
                whileHover={{ scale: 1.05 }}
                style={{ cursor: 'default' }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
