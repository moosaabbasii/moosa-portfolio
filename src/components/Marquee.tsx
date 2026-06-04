import { motion } from 'framer-motion'

const ITEMS = [
  'AWS Lambda', 'Python', 'React', 'Three.js', 'DynamoDB',
  'OpenCV', 'Flask', 'TypeScript', 'Burp Suite', 'Streamlit',
  'Docker', 'GHG Protocol', 'SQL', 'OWASP WSTG', 'Pandas',
  'Plotly', 'OWASP ZAP', 'Node.js', 'PostgreSQL', 'C++',
]

const SEP = '·'

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS, ...ITEMS]

  return (
    <div style={{
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '16px 0',
      overflow: 'hidden',
      background: 'var(--bg-card)',
    }}>
      <motion.div
        animate={{ x: ['0%', '-33.33%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        style={{ display: 'flex', gap: 36, width: 'max-content', alignItems: 'center' }}
      >
        {doubled.map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 36, whiteSpace: 'nowrap' }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text3)' }}>
              {item}
            </span>
            <span style={{ color: 'var(--border)', fontSize: 14 }}>{SEP}</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
