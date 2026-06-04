import { info } from '../data/portfolio'

export default function Footer() {
  return (
    <footer
      className="section-pad"
      style={{
        padding: '24px 80px',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        background: '#0a0614',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 12,
      }}
    >
      <p style={{ fontSize: 13, color: 'rgba(248,250,252,0.3)' }}>
        © 2025 Moosa Abbasi
      </p>
      <div style={{ display: 'flex', gap: 24 }}>
        {[
          { label: 'GitHub',   href: info.github },
          { label: 'LinkedIn', href: info.linkedin },
          { label: 'Back to top ↑', href: '#' },
        ].map(l => (
          <a
            key={l.label}
            href={l.href}
            target={l.label !== 'Back to top ↑' ? '_blank' : undefined}
            rel="noopener noreferrer"
            style={{ fontSize: 13, color: 'rgba(248,250,252,0.3)', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'rgba(248,250,252,0.8)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(248,250,252,0.3)'}
          >
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
