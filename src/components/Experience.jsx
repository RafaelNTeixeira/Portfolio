import { motion } from 'framer-motion'

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}

const experiences = [
  {
    id: 'solidbridge-research',
    company: 'Solid Bridge',
    role: 'Research Intern',
    period: 'Aug 2025 — Sep 2025',
    duration: '2 months',
    location: 'Porto, Portugal · Hybrid',
    desc: 'Leading research and evaluation of system migration technologies to modernize outdated infrastructure. Assessing solutions based on technical compatibility, scalability and strategic fit.',
    skills: ['System Design', 'Containerization', 'Research', 'Cloud Architecture', 'DevOps', 'Documentation'],
  },
  {
    id: 'criticalsoftware',
    company: 'Critical Software',
    role: 'Software Engineering Intern',
    period: 'Jul 2025 — Aug 2025',
    duration: '2 months',
    location: 'Porto, Portugal · Hybrid',
    desc: 'SRS: Developed a simulation model to analyse and manage thermal conditions in spacecraft environments. ARMS: Created software to monitor and reduce driver fatigue in automotive and railway systems. DES: Built an enterprise dashboard for real-time monitoring and data visualisation using Spring Boot with Grafana/Kibana.',
    skills: ['Python', 'Spring Boot', 'Grafana', 'Kibana', 'Data Analysis', 'Java', 'Simulation', 'Docker', 'REST APIs'],
  },
  {
    id: 'solidbridge-intern',
    company: 'Solid Bridge',
    role: 'Software Development Intern',
    period: 'Feb 2024 — Jul 2024',
    duration: '6 months',
    location: 'Matosinhos, Porto, Portugal · Hybrid',
    desc: 'Developed an email reception and support request management platform to improve the workflow and organisation of the company. Also created a dashboard and a work monitoring system with a reward mechanism based on employee performance.',
    skills: ['JavaScript', 'CodeIgniter', 'PHP', 'MySQL', 'REST APIs', 'Dashboard Design', 'UI/UX'],
  },
]

export default function Experience() {
  return (
    <>
      <div className="section-divider" />
      <section id="experience" className="section">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className="chapter">
            <span className="chapter-number" aria-hidden>03</span>
            <motion.div variants={reveal}>
              <p className="chapter-label">Chapter Three</p>
              <h2 className="chapter-title">
                The <em>Professional</em>
              </h2>
            </motion.div>
          </div>

          <div className="experience-list">
            {experiences.map(exp => (
              <motion.div key={exp.id} className="exp-card" variants={reveal}>
                <div className="exp-header">
                  <div>
                    <p className="exp-company">{exp.company}</p>
                    <h3 className="exp-role">{exp.role}</h3>
                  </div>
                  <div className="exp-meta">
                    <p className="exp-date">{exp.period}</p>
                    <p className="exp-location">📍 {exp.location}</p>
                  </div>
                </div>
                <p className="exp-desc">{exp.desc}</p>
                <div className="exp-skills">
                  {exp.skills.map(skill => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  )
}
