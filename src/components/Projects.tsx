import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { projects } from '../data/portfolio'

const featured = projects.filter(p => p.featured)
const rest = projects.filter(p => !p.featured)

function ProjectCard({
  project,
  index,
  large = false,
}: {
  project: typeof projects[number]
  index: number
  large?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 })
  const [hovered, setHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const xPct = (e.clientX - rect.left) / rect.width
    const yPct = (e.clientY - rect.top) / rect.height
    setTilt({ x: (yPct - 0.5) * -8, y: (xPct - 0.5) * 8 })
    setSpotlight({ x: xPct * 100, y: yPct * 100 })
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false) }}
      style={{
        background: hovered
          ? 'rgba(255,255,255,0.06)'
          : large ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.03)',
        border: hovered
          ? '1px solid rgba(124,58,237,0.35)'
          : '1px solid rgba(255,255,255,0.07)',
        borderRadius: 20,
        padding: large ? '36px 32px' : '28px 26px',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        transform: hovered
          ? `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(6px)`
          : 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
        transition: hovered ? 'transform 0.08s linear, background 0.2s, border 0.2s, box-shadow 0.2s' : 'transform 0.5s ease, background 0.3s, border 0.3s, box-shadow 0.3s',
        boxShadow: hovered
          ? '0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(124,58,237,0.08)'
          : '0 4px 20px rgba(0,0,0,0.2)',
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* Mouse-position spotlight */}
      <div style={{
        position: 'absolute', inset: 0,
        background: hovered
          ? `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(124,58,237,0.14), transparent 55%)`
          : 'none',
        transition: hovered ? 'none' : 'opacity 0.4s',
        pointerEvents: 'none',
        borderRadius: 20,
      }} />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: large ? 28 : 22 }}>{project.emoji}</span>
          <div>
            <h3 style={{
              fontSize: large ? 18 : 15,
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'rgba(255,255,255,0.92)',
              lineHeight: 1.2,
            }}>
              {project.name}
            </h3>
            <p style={{ fontSize: 11, color: 'rgba(167,139,250,0.8)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: 2 }}>
              {project.tagline}
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              style={{ color: 'rgba(255,255,255,0.3)', transition: 'color 0.2s', display: 'flex' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
            >
              <FiGithub size={17} />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              style={{ color: 'rgba(255,255,255,0.3)', transition: 'color 0.2s', display: 'flex' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#a78bfa')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
            >
              <FiExternalLink size={17} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p style={{
        fontSize: large ? 14 : 13,
        color: 'rgba(255,255,255,0.45)',
        lineHeight: 1.65,
        flex: 1,
        position: 'relative',
      }}>
        {project.description}
      </p>

      {/* Tech stack */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, position: 'relative' }}>
        {project.tech.map(t => (
          <span key={t} style={{
            padding: '3px 10px',
            background: 'rgba(124,58,237,0.12)',
            border: '1px solid rgba(124,58,237,0.20)',
            borderRadius: 100,
            fontSize: 11, fontWeight: 500,
            color: 'rgba(167,139,250,0.8)',
          }}>
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section
      id="projects"
      className="section-pad"
      style={{
        padding: '120px 80px',
        background: '#0a0d1a',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient purple glow */}
      <div style={{
        position: 'absolute',
        top: '30%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 900, height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, rgba(99,102,241,0.05) 50%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%', right: '10%',
        width: 500, height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
      }} />

      {/* Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 16 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 60, position: 'relative' }}
      >
        <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#a78bfa' }}>
          Projects
        </span>
        <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }} />
        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', whiteSpace: 'nowrap' }}>
          {projects.length} projects
        </span>
      </motion.div>

      {/* Featured grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginBottom: 20, position: 'relative' }}>
        {featured.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} large />
        ))}
      </div>

      {/* Divider */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '48px 0', position: 'relative' }}
      >
        <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.06)' }} />
        <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', whiteSpace: 'nowrap' }}>
          More Projects
        </span>
        <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.06)' }} />
      </motion.div>

      {/* Rest — 3 columns */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, position: 'relative' }}>
        {rest.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
