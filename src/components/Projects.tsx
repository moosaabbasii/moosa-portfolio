import { useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { projects } from '../data/portfolio'

/* ── 3D tilt card ── */
function TiltCard({ children, color }: { children: React.ReactNode; color: string }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 30 })
  const glareX = useTransform(mouseX, [-0.5, 0.5], ['0%', '100%'])
  const glareY = useTransform(mouseY, [-0.5, 0.5], ['0%', '100%'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current!.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 800,
        transformStyle: 'preserve-3d',
        position: 'relative',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        background: 'var(--card)',
        border: '1px solid var(--border)',
        transition: 'border-color 0.3s, box-shadow 0.3s',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = `${color}44`
        ;(e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px ${color}18`
      }}
      onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
        ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
      }}
    >
      {/* Glare */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.06), transparent 60%)`,
          pointerEvents: 'none',
          zIndex: 2,
          borderRadius: 'inherit',
        }}
      />
      {children}
    </motion.div>
  )
}

const featured = projects.filter(p => p.featured)
const rest = projects.filter(p => !p.featured)

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const cardAnim = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>

      {/* Rich multi-color CSS mesh gradient — emerald + indigo + rose */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: `
          radial-gradient(ellipse at 0% 0%,   rgba(16,185,129,0.18) 0%, transparent 50%),
          radial-gradient(ellipse at 100% 0%,  rgba(99,102,241,0.18) 0%, transparent 50%),
          radial-gradient(ellipse at 100% 100%,rgba(244,63,94,0.14) 0%, transparent 50%),
          radial-gradient(ellipse at 0% 100%,  rgba(34,211,238,0.12) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 50%,  rgba(139,92,246,0.08) 0%, transparent 60%),
          #06060f
        `,
      }} />

      {/* Dot-grid texture */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />

      {/* Diagonal light streak */}
      <div style={{
        position: 'absolute', top: '-20%', left: '-10%', zIndex: 1,
        width: '70%', height: '140%',
        background: 'linear-gradient(135deg, rgba(16,185,129,0.04) 0%, rgba(99,102,241,0.04) 50%, transparent 100%)',
        transform: 'rotate(-15deg)',
        pointerEvents: 'none',
      }} />

      {/* Edge fades */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 100, zIndex: 2, background: 'linear-gradient(to bottom, var(--bg2), transparent)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 100, zIndex: 2, background: 'linear-gradient(to top, var(--bg), transparent)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 56 }}
        >
          <div className="section-label">04. Projects</div>
          <h2 className="section-title">
            What I've <span className="grad">Built</span>
          </h2>
          <div className="divider" />
          <p className="section-subtitle">
            A mix of cloud systems, algorithms, computer vision, and data structures — things I build to learn and ship.
          </p>
        </motion.div>

        {/* Featured projects */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 24,
            marginBottom: 24,
          }}
        >
          {featured.map(project => (
            <motion.div key={project.name} variants={cardAnim}>
              <TiltCard color={project.color}>
                <div style={{ padding: 28 }}>
                  {/* Top accent */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0, left: 0, right: 0,
                      height: 2,
                      background: `linear-gradient(90deg, ${project.color}, ${project.color}44)`,
                    }}
                  />

                  {/* Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                    <div>
                      <div style={{ fontSize: 26, marginBottom: 8 }}>{project.emoji}</div>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--heading)', marginBottom: 4 }}>
                        {project.name}
                      </h3>
                      <p style={{ fontSize: 13, color: project.color, fontWeight: 600, fontFamily: 'var(--mono)' }}>
                        {project.tagline}
                      </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end' }}>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 4,
                            padding: '5px 12px',
                            borderRadius: 6,
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            fontSize: 12,
                            fontFamily: 'var(--mono)',
                            color: 'var(--text2)',
                            transition: 'background 0.2s, color 0.2s',
                          }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.background = `${project.color}22`
                            ;(e.currentTarget as HTMLElement).style.color = project.color
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'
                            ;(e.currentTarget as HTMLElement).style.color = 'var(--text2)'
                          }}
                        >
                          GitHub ↗
                        </a>
                      )}
                    </div>
                  </div>

                  <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.7, marginBottom: 20 }}>
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {project.tech.map(t => (
                      <span
                        key={t}
                        style={{
                          fontSize: 11,
                          fontFamily: 'var(--mono)',
                          padding: '3px 10px',
                          borderRadius: 4,
                          background: `${project.color}12`,
                          borderLeft: `2px solid ${project.color}`,
                          color: 'var(--text2)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Other projects */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          style={{ marginBottom: 20 }}
        >
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--text2)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 16 }}>
            Other noteworthy work
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 16,
          }}
        >
          {rest.map(project => (
            <motion.div
              key={project.name}
              variants={cardAnim}
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: 22,
                transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.borderColor = `${project.color}44`
                el.style.transform = 'translateY(-4px)'
                el.style.boxShadow = `0 12px 32px ${project.color}14`
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.borderColor = 'var(--border)'
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'none'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 22 }}>{project.emoji}</span>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, fontFamily: 'var(--mono)', color: 'var(--text2)', transition: 'color 0.2s' }}
                    onMouseEnter={e => ((e.target as HTMLElement).style.color = project.color)}
                    onMouseLeave={e => ((e.target as HTMLElement).style.color = 'var(--text2)')}
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
              <h4 style={{ fontSize: 15, fontWeight: 700, color: 'var(--heading)' }}>{project.name}</h4>
              <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.6 }}>{project.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 4 }}>
                {project.tech.slice(0, 3).map(t => (
                  <span key={t} style={{ fontSize: 11, fontFamily: 'var(--mono)', padding: '2px 8px', borderRadius: 4, background: `${project.color}12`, borderLeft: `2px solid ${project.color}`, color: 'var(--text2)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          style={{ textAlign: 'center', marginTop: 52 }}
        >
          <a
            href="https://github.com/moosaabbasii"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            View all on GitHub ↗
          </a>
        </motion.div>
      </div>
    </section>
  )
}
