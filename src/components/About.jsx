import { motion } from 'framer-motion'
import { BIRTH_YEAR } from '../config'

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show:   {
    opacity: 1, y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
}

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}

function getAge() {
  return new Date().getFullYear() - BIRTH_YEAR
}

const stats = [
  { icon: '🎂', label: 'Age',       value: () => `${getAge()} years old` },
  { icon: '📍', label: 'Location',  value: () => 'Porto, Portugal' },
  { icon: '🎓', label: 'Degree',    value: () => 'MIEIC — FEUP' },
  { icon: '⚽', label: 'Sport',     value: () => '11 years of federated football' },
  { icon: '🎮', label: 'Interests', value: () => 'Video Games · Films · YouTube' },
  { icon: '🏃', label: 'Fitness',   value: () => 'Running · Gym · Road Races' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        {/* Chapter header */}
        <div className="chapter">
          <span className="chapter-number" aria-hidden>01</span>
          <motion.div variants={reveal}>
            <p className="chapter-label">Chapter One</p>
            <h2 className="chapter-title">
              The <em>Person</em>
            </h2>
          </motion.div>
        </div>

        <div className="about-grid">
          {/* Text side */}
          <motion.div className="about-text" variants={stagger}>
            <motion.p variants={reveal}>
              Born in <strong>2003</strong>, I grew up in Porto with a passion for both sport and technology.
              After <strong>11 years of federated football</strong>, representing clubs like
              Benfica, Feirense and Leixões, and competing in international tournaments such as the
              <strong> Ibercup</strong> and <strong>Mértola Cup</strong>, I know what it takes to perform under pressure.
            </motion.p>
            <motion.p variants={reveal}>
              The same discipline I brought to the pitch, I now bring to the keyboard.
              With hands-on software engineering experience from internships at
              <strong> Critical Software</strong> and <strong>Solid Bridge</strong>, I'm
              constantly learning and building solutions that make a real difference.
            </motion.p>
            <motion.p variants={reveal}>
              Off the screen, you'll find me running road races, at the gym, or completely
              absorbed in a good video game or film.
            </motion.p>

            <motion.blockquote className="about-quote" variants={reveal}>
              <p>
                "I know what it takes to excel under pressure. Now, I'm channelling that discipline
                into my true passion, programming."
              </p>
            </motion.blockquote>
          </motion.div>

          {/* Stats side */}
          <motion.div className="about-stats" variants={stagger}>
            {stats.map(stat => (
              <motion.div className="stat-card" key={stat.label} variants={reveal}>
                <span className="stat-icon">{stat.icon}</span>
                <div className="stat-info">
                  <p className="stat-label">{stat.label}</p>
                  <p className="stat-value">{stat.value()}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
