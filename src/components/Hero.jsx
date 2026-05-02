import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const videoScale   = useTransform(scrollYProgress, [0, 1], [1, 0.85])
  const videoOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const textY        = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const textOpacity  = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Try loading the video; if not found, show a placeholder
  const videoSrc = '/me.mp4'

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section id="hero" className="hero" ref={ref}>
      {/* Background glow */}
      <div className="hero-bg-glow" />

      {/* Video */}
      <motion.div
        style={{ scale: videoScale, opacity: videoOpacity }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="hero-video-wrapper">
          <video
            className="hero-video"
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            onError={e => {
              // If video fails, show placeholder
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
        </div>
      </motion.div>

      {/* Name & title */}
      <motion.div
        className="hero-text"
        style={{ y: textY, opacity: textOpacity }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 className="hero-name" variants={item}>
          Rafael <em>Teixeira</em>
        </motion.h1>
        <motion.p className="hero-title" variants={item}>
          Software Engineer
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span>scroll</span>
        <div className="hero-scroll-line" />
      </motion.div>
    </section>
  )
}
