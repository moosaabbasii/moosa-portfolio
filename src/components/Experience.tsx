import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { experience } from '../data/portfolio'

const cardShades = [
  { bg: 'rgba(255,255,255,0.52)', border: 'rgba(109,40,217,0.22)', glow: 'rgba(109,40,217,0.18)' },
  { bg: 'rgba(255,255,255,0.48)', border: 'rgba(37,99,235,0.20)',  glow: 'rgba(37,99,235,0.15)'  },
  { bg: 'rgba(255,255,255,0.52)', border: 'rgba(91,33,182,0.24)',  glow: 'rgba(91,33,182,0.18)'  },
  { bg: 'rgba(255,255,255,0.48)', border: 'rgba(29,78,216,0.22)',  glow: 'rgba(29,78,216,0.15)'  },
  { bg: 'rgba(255,255,255,0.52)', border: 'rgba(79,70,229,0.22)',  glow: 'rgba(79,70,229,0.16)'  },
]

const companyInitials: Record<string, string> = {
  'AI Course Companion · USF': 'AICC',
  'Sustainability Emissions · USF': 'USF',
  'Vorniqo Solutions': 'VQ',
  'Huawei Technologies': 'HW',
  'USF Student Government Association': 'SGA',
}

export default function Experience() {
  const [activeIdx, setActiveIdx] = useState(0)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = experience.map((_, i) => {
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIdx(i) },
        { rootMargin: '-38% 0px -38% 0px', threshold: 0 }
      )
      if (itemRefs.current[i]) obs.observe(itemRefs.current[i]!)
      return obs
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <section
      id="experience"
      className="section-pad"
      style={{
        padding: '120px 80px',
        background: '#c9a8f2',
        backgroundImage: 'url(/bg-lavender.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 80, position: 'relative' }}>
        <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5b21b6' }}>
          Experience
        </span>
        <div style={{ flex: 1, height: 1, background: 'rgba(91,33,182,0.2)' }} />
      </div>

      <div className="exp-grid" style={{ display: 'flex', gap: 64, position: 'relative' }}>

        {/* ── Left: timeline sidebar ── */}
        <div
          className="exp-sticky"
          style={{ position: 'sticky', top: '20vh', height: 'fit-content', flex: '0 0 240px' }}
        >
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 0 }}>
            {/* Vertical timeline line */}
            <div style={{
              position: 'absolute',
              left: 19, top: 20, bottom: 20,
              width: 1,
              background: 'linear-gradient(to bottom, rgba(91,33,182,0.5), rgba(91,33,182,0.1))',
            }} />
            {/* Glowing active segment */}
            <motion.div
              animate={{ top: `${activeIdx * (100 / experience.length)}%`, height: `${100 / experience.length}%` }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: 'absolute', left: 19, width: 1,
                background: '#7c3aed',
                boxShadow: '0 0 8px rgba(124,58,237,0.6)',
                borderRadius: 1,
              }}
            />

            {experience.map((exp, i) => {
              const isActive = i === activeIdx
              const initials = companyInitials[exp.company] ?? exp.company.slice(0, 2).toUpperCase()
              return (
                <motion.button
                  key={i}
                  animate={{ opacity: isActive ? 1 : 0.45 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => itemRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                  style={{
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '14px 0 14px 44px',
                    position: 'relative',
                  }}
                >
                  {/* Timeline dot */}
                  <div style={{
                    position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)',
                    width: 13, height: 13, borderRadius: '50%',
                    background: isActive ? '#7c3aed' : 'rgba(255,255,255,0.7)',
                    border: `2px solid ${isActive ? '#7c3aed' : 'rgba(91,33,182,0.3)'}`,
                    boxShadow: isActive ? `0 0 10px rgba(124,58,237,0.5)` : 'none',
                    transition: 'all 0.3s',
                    zIndex: 1,
                  }} />

                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: 8,
                      background: isActive ? 'rgba(124,58,237,0.15)' : 'rgba(255,255,255,0.4)',
                      border: `1px solid ${isActive ? 'rgba(124,58,237,0.35)' : 'rgba(91,33,182,0.15)'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 8, fontWeight: 800,
                      color: isActive ? '#5b21b6' : 'rgba(91,33,182,0.5)',
                      letterSpacing: '0.03em', flexShrink: 0,
                      transition: 'all 0.3s',
                    }}>
                      {initials}
                    </div>
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 700, color: '#2d1b69', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
                        {exp.company.split(' · ')[0]}
                      </p>
                      <p style={{ fontSize: 11, color: 'rgba(45,27,105,0.55)', fontWeight: 500, marginTop: 2 }}>
                        {exp.period}
                      </p>
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </div>
        </div>

        {/* ── Right: scrolling cards ── */}
        <div style={{ flex: 1 }}>
          {experience.map((exp, i) => {
            const isActive = i === activeIdx
            const shade = cardShades[i % cardShades.length]
            return (
              <div
                key={i}
                ref={el => itemRefs.current[i] = el}
                style={{
                  minHeight: '65vh',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  paddingBottom: i < experience.length - 1 ? 60 : 0,
                }}
              >
                <motion.div
                  animate={{
                    x: isActive ? 10 : 0,
                    boxShadow: isActive
                      ? `0 20px 60px ${shade.glow}, 0 4px 16px rgba(0,0,0,0.08)`
                      : '0 2px 12px rgba(0,0,0,0.06)',
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    background: shade.bg,
                    border: `1px solid ${shade.border}`,
                    borderRadius: 20,
                    padding: '36px 40px',
                    backdropFilter: 'blur(16px)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Role header */}
                  <div style={{ marginBottom: 28, position: 'relative' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                      <span style={{
                        display: 'inline-block', padding: '3px 10px',
                        background: 'rgba(91,33,182,0.12)',
                        color: '#5b21b6',
                        borderRadius: 100, fontSize: 11,
                        fontWeight: 700, letterSpacing: '0.07em',
                        textTransform: 'uppercase',
                      }}>
                        {exp.type}
                      </span>
                      <span style={{ fontSize: 13, color: 'rgba(45,27,105,0.55)', fontWeight: 500 }}>{exp.period}</span>
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em', color: '#1e0a3c' }}>
                      {exp.role}
                    </h3>
                    <p style={{ fontSize: 14, color: 'rgba(45,27,105,0.6)', marginTop: 4, fontWeight: 500 }}>
                      {exp.company}
                    </p>
                  </div>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14, position: 'relative' }}>
                    {exp.bullets.map((bullet, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ delay: j * 0.06, duration: 0.4 }}
                        style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}
                      >
                        <span style={{
                          width: 5, height: 5, borderRadius: '50%',
                          background: '#7c3aed', flexShrink: 0, marginTop: 9,
                        }} />
                        <span style={{ fontSize: 15, color: '#4a3570', lineHeight: 1.75 }}>{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
