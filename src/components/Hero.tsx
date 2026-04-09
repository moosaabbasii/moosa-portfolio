import { useState, useEffect, Suspense } from 'react'
import { motion } from 'framer-motion'
import { info, badges } from '../data/portfolio'
import HeroScene from './three/HeroScene'

function TypewriterRoles({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [blink, setBlink] = useState(true)

  useEffect(() => {
    const target = roles[index]
    let timeout: ReturnType<typeof setTimeout>
    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 65)
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else {
      setDeleting(false)
      setIndex((index + 1) % roles.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, index, roles])

  useEffect(() => {
    const id = setInterval(() => setBlink(b => !b), 530)
    return () => clearInterval(id)
  }, [])

  return (
    <span style={{ fontFamily: 'var(--mono)', fontSize: 'clamp(15px, 2vw, 19px)', color: 'var(--accent2)', fontWeight: 500 }}>
      &gt;&nbsp;{displayed}
      <span style={{ opacity: blink ? 1 : 0, color: 'var(--accent)' }}>|</span>
    </span>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: 68,
        overflow: 'hidden',
      }}
    >
      {/* ── 3D canvas — right half only so it never touches text ── */}
      <div
        style={{
          position: 'absolute',
          top: 0, bottom: 0,
          left: '48%',   /* starts at center, never bleeds into text */
          right: 0,
          zIndex: 0,
        }}
      >
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>

        {/* Soft left-edge fade so scene blends into background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, var(--bg) 0%, rgba(6,6,15,0.0) 30%)',
            pointerEvents: 'none',
          }}
        />
        {/* Bottom fade into next section */}
        <div
          style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            height: 180,
            background: 'linear-gradient(to bottom, transparent, var(--bg))',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Ghost avatar watermark — top right */}
      <div
        style={{
          position: 'absolute',
          right: '5%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 'clamp(220px, 28vw, 420px)',
          height: 'clamp(220px, 28vw, 420px)',
          borderRadius: '50%',
          overflow: 'hidden',
          opacity: 0.07,
          pointerEvents: 'none',
          zIndex: 1,
          filter: 'blur(1px) saturate(0.4)',
        }}
      >
        <img
          src="/avatar.png"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={e => { (e.target as HTMLImageElement).style.display = 'none' }}
        />
      </div>

      {/* Grid overlay */}
      <div className="grid-bg" style={{ zIndex: 1 }} />

      {/* ── Content layer ── */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: 680,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          {/* Greeting */}
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show">
            <span style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Hi, I'm —
            </span>
          </motion.div>

          {/* Name */}
          <motion.div custom={1} variants={fadeUp} initial="hidden" animate="show">
            <h1
              style={{
                fontSize: 'clamp(52px, 9vw, 104px)',
                fontWeight: 900,
                lineHeight: 0.95,
                letterSpacing: '-0.03em',
                color: 'var(--heading)',
              }}
            >
              {info.firstName}
              <br />
              <span style={{ background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {info.lastName}
              </span>
            </h1>
          </motion.div>

          {/* Typewriter */}
          <motion.div custom={2} variants={fadeUp} initial="hidden" animate="show">
            <TypewriterRoles roles={info.roles} />
          </motion.div>

          {/* Bio */}
          <motion.p
            custom={3} variants={fadeUp} initial="hidden" animate="show"
            style={{ color: 'var(--text2)', fontSize: 16, lineHeight: 1.75, maxWidth: 500 }}
          >
            {info.bio}
          </motion.p>

          {/* Badges */}
          <motion.div custom={4} variants={fadeUp} initial="hidden" animate="show" style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {badges.map(b => (
              <span key={b.text} className={`chip ${b.color}`}>{b.text}</span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div custom={5} variants={fadeUp} initial="hidden" animate="show" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 4 }}>
            <a href="#projects" className="btn-primary">
              View My Work <span style={{ fontSize: 16 }}>→</span>
            </a>
            <a href="#contact" className="btn-outline">
              Get In Touch
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            custom={6} variants={fadeUp} initial="hidden" animate="show"
            style={{ display: 'flex', gap: 24, alignItems: 'center', marginTop: 4 }}
          >
            {[
              { label: 'GitHub ↗', href: info.github },
              { label: 'LinkedIn ↗', href: info.linkedin },
              { label: `${info.email} ↗`, href: `mailto:${info.email}` },
            ].map(l => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{ color: 'var(--text2)', fontSize: 13, fontFamily: 'var(--mono)', transition: 'color 0.2s' }}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = 'var(--heading)')}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = 'var(--text2)')}
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          color: 'var(--text2)',
          fontSize: 11,
          fontFamily: 'var(--mono)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          zIndex: 2,
        }}
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ fontSize: 18 }}
        >
          ↓
        </motion.div>
        scroll
      </motion.div>
    </section>
  )
}
