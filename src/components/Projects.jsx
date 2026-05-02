import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { GITHUB_USERNAME, GITHUB_TOKEN } from '../config'

// GitHub language colours
const LANG_COLORS = {
  JavaScript:   '#f7df1e',
  TypeScript:   '#3178c6',
  Python:       '#3572a5',
  Java:         '#b07219',
  'C#':         '#178600',
  PHP:          '#4f5d95',
  HTML:         '#e34c26',
  CSS:          '#563d7c',
  Go:           '#00add8',
  Rust:         '#dea584',
  Vue:          '#41b883',
  Kotlin:       '#a97bff',
  Swift:        '#f05138',
  'Jupyter Notebook': '#da5b0b',
  Shell:        '#89e051',
  C:            '#555555',
  'C++':        '#f34b7d',
  Ruby:         '#701516',
  Scala:        '#c22d40',
}

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton" style={{ height: 20, width: '40%' }} />
      <div className="skeleton" style={{ height: 24, width: '75%' }} />
      <div className="skeleton" style={{ height: 16, width: '100%' }} />
      <div className="skeleton" style={{ height: 16, width: '85%' }} />
      <div className="skeleton" style={{ height: 16, width: '60%' }} />
      <div className="skeleton" style={{ height: 14, width: '30%', marginTop: '0.5rem' }} />
    </div>
  )
}

function ProjectCard({ repo, index }) {
  const langColor = LANG_COLORS[repo.language] || '#888'

  return (
    <motion.a
      className="project-card"
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      variants={reveal}
      whileHover={{ y: -4 }}
    >
      <div className="project-card-top">
        <span className="project-icon">
          {repo.fork ? '🍴' : repo.language === 'Python' ? '🐍'
            : repo.language === 'JavaScript' || repo.language === 'TypeScript' ? '⚡'
            : repo.language === 'Java' ? '☕'
            : '📦'}
        </span>
        <span className="project-stars">
          ⭐ {repo.stargazers_count}
        </span>
      </div>

      <h3 className="project-name">{repo.name.replace(/-/g, ' ')}</h3>
      <p className="project-desc">
        {repo.description || 'No description provided.'}
      </p>

      <div className="project-footer">
        {repo.language && (
          <span className="project-lang">
            <span
              className="lang-dot"
              style={{ background: langColor }}
            />
            {repo.language}
          </span>
        )}
        <span className="project-arrow">↗</span>
      </div>
    </motion.a>
  )
}

export default function Projects() {
  const [repos, setRepos]   = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]   = useState(null)

  useEffect(() => {
    if (GITHUB_USERNAME === 'YOUR_GITHUB_USERNAME') {
      setError('config')
      setLoading(false)
      return
    }

    const headers = { Accept: 'application/vnd.github+json' }
    if (GITHUB_TOKEN) headers['Authorization'] = `Bearer ${GITHUB_TOKEN}`

    fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=24&type=owner`,
      { headers }
    )
      .then(res => {
        if (!res.ok) throw new Error(`GitHub API: ${res.status}`)
        return res.json()
      })
      .then(data => {
        const sorted = data
          .filter(r => !r.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0, 12)
        setRepos(sorted)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <>
      <div className="section-divider" />
      <section id="projects" className="section">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className="chapter">
            <span className="chapter-number" aria-hidden>05</span>
            <div className="projects-header-row">
              <motion.div variants={reveal}>
                <p className="chapter-label">Chapter Five</p>
                <h2 className="chapter-title">
                  The <em>Builder</em>
                </h2>
              </motion.div>
              {GITHUB_USERNAME !== 'YOUR_GITHUB_USERNAME' && (
                <motion.a
                  className="projects-github-link"
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={reveal}
                >
                  <span>⚡</span>
                  github.com/{GITHUB_USERNAME}
                </motion.a>
              )}
            </div>
          </div>

          <div className="projects-grid">
            {loading && (
              Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))
            )}

            {!loading && error === 'config' && (
              <div className="projects-error" style={{ gridColumn: '1 / -1' }}>
                <p style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚙️</p>
                <p>Set your GitHub username in <code>src/config.js</code> to display your projects.</p>
                <code>GITHUB_USERNAME = 'your-username'</code>
              </div>
            )}

            {!loading && error && error !== 'config' && (
              <div className="projects-error" style={{ gridColumn: '1 / -1' }}>
                <p style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚠️</p>
                <p>Could not load repositories.</p>
                <code>{error}</code>
              </div>
            )}

            {!loading && !error && repos.length === 0 && (
              <div className="projects-error" style={{ gridColumn: '1 / -1' }}>
                <p>No public repositories found.</p>
              </div>
            )}

            {!loading && !error && repos.map((repo, i) => (
              <ProjectCard key={repo.id} repo={repo} index={i} />
            ))}
          </div>
        </motion.div>
      </section>
    </>
  )
}
