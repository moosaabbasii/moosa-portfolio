import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { info } from '../data/portfolio'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '0 32px',
        height: 68,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s',
        background: scrolled ? 'rgba(6, 6, 15, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(139,92,246,0.15)' : '1px solid transparent',
      }}
    >
      {/* Logo */}
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
        {/* Monogram */}
        <div style={{
          width: 34, height: 34,
          borderRadius: 9,
          background: 'linear-gradient(135deg, #8b5cf6, #22d3ee)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--mono)', fontWeight: 800, fontSize: 15, color: '#fff',
          flexShrink: 0,
        }}>
          MA
        </div>
        <span style={{ fontFamily: 'var(--font)', fontWeight: 600, fontSize: 15, color: 'var(--heading)' }}>
          Moosa Abbasi
        </span>
      </a>

      {/* Desktop links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }} className="nav-desktop">
        {navLinks.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.06 }}
            style={{
              padding: '6px 14px',
              borderRadius: 6,
              fontFamily: 'var(--mono)',
              fontSize: 13,
              fontWeight: 500,
              color: 'var(--text2)',
              transition: 'color 0.2s, background 0.2s',
            }}
            onMouseEnter={e => {
              (e.target as HTMLElement).style.color = 'var(--heading)'
              ;(e.target as HTMLElement).style.background = 'rgba(139,92,246,0.08)'
            }}
            onMouseLeave={e => {
              (e.target as HTMLElement).style.color = 'var(--text2)'
              ;(e.target as HTMLElement).style.background = 'transparent'
            }}
          >
            {link.label}
          </motion.a>
        ))}
        <motion.a
          href={info.resume}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="btn-outline"
          style={{ padding: '7px 18px', fontSize: 13, marginLeft: 8 }}
        >
          Resume ↗
        </motion.a>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
        style={{
          display: 'none',
          flexDirection: 'column',
          gap: 5,
          padding: 8,
          background: 'none',
          border: 'none',
        }}
        className="nav-hamburger"
      >
        {[0, 1, 2].map(i => (
          <motion.span
            key={i}
            style={{
              display: 'block',
              width: 22,
              height: 2,
              background: 'var(--text)',
              borderRadius: 2,
              transformOrigin: 'center',
            }}
            animate={
              menuOpen
                ? i === 0 ? { rotate: 45, y: 7 }
                : i === 1 ? { opacity: 0 }
                : { rotate: -45, y: -7 }
                : { rotate: 0, y: 0, opacity: 1 }
            }
          />
        ))}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: 68,
              left: 0,
              right: 0,
              background: 'rgba(6,6,15,0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(139,92,246,0.15)',
              padding: '20px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: '10px 0',
                  fontFamily: 'var(--mono)',
                  fontSize: 15,
                  color: 'var(--text)',
                  borderBottom: '1px solid rgba(139,92,246,0.1)',
                }}
              >
                {link.label}
              </a>
            ))}
            <a href={info.resume} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 12, justifyContent: 'center' }}>
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  )
}
