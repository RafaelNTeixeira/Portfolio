import { motion } from 'framer-motion'

const reveal = {
  hidden: { opacity: 0, x: -30 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.18 } },
}

const degrees = [
  {
    id: 'msc',
    badge: "Master's Degree · Ongoing",
    degree: "Master's in Informatics and Computing Engineering",
    school: 'Faculty of Engineering, University of Porto',
    period: 'Sep. 2024 — Jul. 2026',
    active: true,
    desc: 'Advanced study in software systems, distributed architectures and applied research.',
  },
  {
    id: 'bsc',
    badge: "Bachelor's Degree · Completed",
    degree: "Bachelor's in Informatics and Computing Engineering",
    school: 'Faculty of Engineering, University of Porto',
    period: 'Sep. 2021 — Jul. 2024',
    active: false,
    desc: 'Strong foundation in algorithms, data structures, software engineering and systems development.',
  },
]

export default function Education() {
  return (
    <>
      <div className="section-divider" />
      <section id="education" className="section">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className="chapter">
            <span className="chapter-number" aria-hidden>02</span>
            <motion.div variants={reveal}>
              <p className="chapter-label">Chapter Two</p>
              <h2 className="chapter-title">
                The <em>Scholar</em>
              </h2>
            </motion.div>
          </div>

          <div className="education-timeline">
            {degrees.map(deg => (
              <motion.div
                key={deg.id}
                className="edu-item"
                variants={reveal}
              >
                <div className={`edu-dot ${deg.active ? 'active' : ''}`} />
                <div className="edu-card">
                  <span className="edu-badge">
                    {deg.active && (
                      <span style={{
                        display: 'inline-block',
                        width: 6, height: 6,
                        borderRadius: '50%',
                        background: 'currentColor',
                        animation: 'dotPulse 2s ease-in-out infinite',
                      }} />
                    )}
                    {deg.badge}
                  </span>
                  <h3 className="edu-degree">{deg.degree}</h3>
                  <p className="edu-school">{deg.school}</p>
                  <p className="edu-date">{deg.period}</p>
                  <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-dim)', lineHeight: 1.7 }}>
                    {deg.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  )
}
