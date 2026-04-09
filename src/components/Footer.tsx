import { info } from '../data/portfolio'

export default function Footer() {
  return (
    <footer
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #08060f 0%, #0a0520 40%, #050d12 100%)',
        borderTop: '1px solid transparent',
        backgroundClip: 'padding-box',
        padding: '40px 32px',
      }}
    >
      {/* Rainbow top border line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, #8b5cf6, #22d3ee, #10b981, #f59e0b, #f43f5e, #8b5cf6)',
      }} />
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 20,
        }}
      >
        {/* Logo */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <div style={{
              width: 32, height: 32,
              borderRadius: 8,
              background: 'linear-gradient(135deg, #8b5cf6, #22d3ee)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--mono)', fontWeight: 800, fontSize: 13, color: '#fff',
              flexShrink: 0,
            }}>
              MA
            </div>
            <span style={{ fontFamily: 'var(--font)', fontWeight: 600, fontSize: 15, color: 'var(--heading)' }}>
              {info.name}
            </span>
          </div>
          <div style={{ fontSize: 12, color: 'var(--text2)', fontFamily: 'var(--mono)' }}>
            CS @ USF Honors • GPA 3.90 • Tampa, FL
          </div>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: 24 }}>
          {[
            { label: 'GitHub', href: info.github },
            { label: 'LinkedIn', href: info.linkedin },
            { label: 'Email', href: `mailto:${info.email}` },
          ].map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={{
                fontSize: 13,
                fontFamily: 'var(--mono)',
                color: 'var(--text2)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => ((e.target as HTMLElement).style.color = 'var(--heading)')}
              onMouseLeave={e => ((e.target as HTMLElement).style.color = 'var(--text2)')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Credit */}
        <div style={{ fontSize: 12, color: 'var(--text2)', fontFamily: 'var(--mono)', textAlign: 'right' }}>
          <div>Designed & built by {info.firstName}</div>
          <div style={{ marginTop: 4, opacity: 0.5 }}>
            React · Three.js · Framer Motion
          </div>
        </div>
      </div>
    </footer>
  )
}
