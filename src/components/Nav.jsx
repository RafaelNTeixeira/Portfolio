import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const links = [
  { href: '#about',       label: 'About' },
  { href: '#education',   label: 'Education' },
  { href: '#experience',  label: 'Experience' },
  { href: '#volunteering',label: 'Volunteering' },
  { href: '#projects',    label: 'Projects' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`nav ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
    >
      <a href="#hero" className="nav-logo">
        RT<span>.</span>
      </a>

      <ul className="nav-links">
        {links.map(link => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      {/* Scroll progress bar */}
      <motion.div
        className="nav-progress"
        style={{ width: progress }}
      />
    </motion.nav>
  )
}
