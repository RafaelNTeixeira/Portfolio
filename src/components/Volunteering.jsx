import { motion } from 'framer-motion'

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const roles = [
  {
    id: 'u8',
    icon: '🥅',
    role: 'Assistant Coach — Under-8',
    period: 'Jul 2023 — Sep 2024',
    duration: '1 year and 3 months',
    desc: 'Training and developing young players aged 7–8, focusing on motor coordination, football fundamentals and team spirit.',
  },
  {
    id: 'u5-u7',
    icon: '⭐',
    role: 'Head Coach — Under-5 · Assistant Coach — Under-7',
    period: 'Jul 2022 — Jun 2023',
    duration: '1 year',
    desc: 'First experience as head coach, responsible for planning training sessions, communicating with parents and managing the group. Simultaneously served as assistant coach for the Under-7 team.',
  },
  {
    id: 'u13',
    icon: '🦁',
    role: 'Assistant Coach — Under-13',
    period: 'Jun 2021 — Jun 2022',
    duration: '1 year and 1 month',
    desc: 'Official entry into the coaching staff at Escolas de Futebol Benfica Vila Nova de Gaia. Technical and tactical support to the head coach.',
  },
]

export default function Volunteering() {
  return (
    <>
      <div className="section-divider" />
      <section id="volunteering" className="section">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className="chapter">
            <span className="chapter-number" aria-hidden>04</span>
            <motion.div variants={reveal}>
              <p className="chapter-label">Chapter Four</p>
              <h2 className="chapter-title">
                The <em>Coach</em>
              </h2>
            </motion.div>
          </div>

          {/* Hero card */}
          <motion.div className="volunteer-hero" variants={reveal}>
            <div className="volunteer-badge-big">⚽</div>
            <div className="volunteer-hero-text">
              <h3>Escolas de Futebol Benfica — Vila Nova de Gaia</h3>
              <p>
                Over <strong>3 years and 4 months</strong>, I gave back to football everything it gave me.
                I coached young players from ages 5 to 13, developing leadership, communication and
                team management skills, competencies I bring every day to software engineering.
              </p>
              <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {['Leadership', 'Communication', 'Time Management', 'Coaching', 'Planning'].map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Role cards */}
          <motion.div className="volunteer-roles" variants={stagger}>
            {roles.map(role => (
              <motion.div key={role.id} className="volunteer-card" variants={reveal}>
                <div className="volunteer-card-header">
                  <span className="volunteer-icon">{role.icon}</span>
                  <span className="volunteer-role">{role.role}</span>
                </div>
                <p className="volunteer-date">{role.period} · {role.duration}</p>
                <p className="volunteer-desc">{role.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
