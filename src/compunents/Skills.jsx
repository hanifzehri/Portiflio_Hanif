import React, { useState } from 'react'
import {
  IconHtml5,
  IconCss3,
  IconJavaScript,
  IconReact,
  IconNode,
  IconExpress,
  IconMongoDB,
  IconResponsive,
  IconGit,
  IconRestApi,
  IconSparkles
} from './Icons'

export default function Skills() {
  const [filter, setFilter] = useState('all')

  const skillsData = [
    {
      name: 'HTML5',
      category: 'frontend',
      level: 'Advanced',
      percentage: 90,
      icon: <IconHtml5 size={38} />,
      desc: 'Semantic elements, web accessibility (a11y), clean structure, and SEO standards.'
    },
    {
      name: 'CSS3',
      category: 'frontend',
      level: 'Advanced',
      percentage: 88,
      icon: <IconCss3 size={38} />,
      desc: 'Flexbox, CSS Grid, custom properties, glassmorphism, keyframes, and transitions.'
    },
    {
      name: 'JavaScript',
      category: 'frontend',
      level: 'Proficient',
      percentage: 85,
      icon: <IconJavaScript size={38} />,
      desc: 'ES6+ syntax, asynchronous programming, Promises, DOM manipulation, and modern patterns.'
    },
    {
      name: 'React.js',
      category: 'frontend',
      level: 'Proficient',
      percentage: 85,
      icon: <IconReact size={38} />,
      desc: 'Functional components, React Hooks (useState, useEffect, useRef), props, and SPA routing.'
    },
    {
      name: 'Responsive Web Design',
      category: 'frontend',
      level: 'Advanced',
      percentage: 92,
      icon: <IconResponsive size={38} />,
      desc: 'Mobile-first layout strategies, responsive typography, media queries, and fluid grids.'
    },
    {
      name: 'Node.js',
      category: 'backend',
      level: 'Proficient',
      percentage: 80,
      icon: <IconNode size={38} />,
      desc: 'Server-side JavaScript runtime, NPM ecosystem, file systems, and asynchronous I/O.'
    },
    {
      name: 'Express.js',
      category: 'backend',
      level: 'Proficient',
      percentage: 80,
      icon: <IconExpress size={38} />,
      desc: 'Server routing, custom middleware, error handlers, and RESTful controller architecture.'
    },
    {
      name: 'REST APIs',
      category: 'backend',
      level: 'Proficient',
      percentage: 84,
      icon: <IconRestApi size={38} />,
      desc: 'Designing and consuming HTTP endpoints, JSON serialization, headers, and status codes.'
    },
    {
      name: 'MongoDB',
      category: 'database',
      level: 'Proficient',
      percentage: 78,
      icon: <IconMongoDB size={38} />,
      desc: 'NoSQL document databases, Mongoose schema modeling, CRUD queries, and data collections.'
    },
    {
      name: 'Git & GitHub',
      category: 'database',
      level: 'Proficient',
      percentage: 85,
      icon: <IconGit size={38} />,
      desc: 'Version control, repository management, commits, branching workflows, and collaboration.'
    }
  ]

  const filteredSkills = filter === 'all'
    ? skillsData
    : skillsData.filter((skill) => skill.category === filter)

  return (
    <section id="skills" className="section" style={{ background: 'rgba(10, 15, 29, 0.4)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <IconSparkles size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            Core technical stack focused strictly on practical web development and full-stack JavaScript foundations.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '44px'
          }}
        >
          {[
            { id: 'all', label: 'All Technologies' },
            { id: 'frontend', label: 'Frontend' },
            { id: 'backend', label: 'Backend & APIs' },
            { id: 'database', label: 'Database & Tools' }
          ].map((cat) => (
            <button
              key={cat.id}
              className={`skill-filter${filter === cat.id ? ' is-active' : ''}`}
              onClick={() => setFilter(cat.id)}
              style={{
                padding: '8px 20px',
                borderRadius: '9999px',
                fontSize: '0.88rem',
                fontWeight: '600',
                cursor: 'pointer',
                border: filter === cat.id ? '1px solid #6366f1' : '1px solid rgba(255, 255, 255, 0.1)',
                background: filter === cat.id ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                color: filter === cat.id ? '#ffffff' : '#94a3b8',
                transition: 'all 0.2s ease',
                backdropFilter: 'blur(8px)'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '24px'
          }}
        >
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="glass-card"
              style={{
                padding: '24px',
                borderRadius: '18px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '190px'
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '16px'
                  }}
                >
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '14px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    {skill.icon}
                  </div>
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: '700',
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      background: 'rgba(99, 102, 241, 0.12)',
                      color: '#a5b4fc',
                      border: '1px solid rgba(99, 102, 241, 0.25)'
                    }}
                  >
                    {skill.level}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '8px', color: '#ffffff' }}>
                  {skill.name}
                </h3>

                <p style={{ fontSize: '0.86rem', color: '#94a3b8', lineHeight: 1.5, marginBottom: '16px' }}>
                  {skill.desc}
                </p>
              </div>

              {/* Progress Bar Indicator */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.75rem',
                    color: '#64748b',
                    marginBottom: '6px',
                    fontWeight: '600'
                  }}
                >
                  <span>Proficiency</span>
                  <span style={{ color: '#818cf8' }}>{skill.percentage}%</span>
                </div>
                <div
                  style={{
                    width: '100%',
                    height: '6px',
                    borderRadius: '9999px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    style={{
                      width: `${skill.percentage}%`,
                      height: '100%',
                      borderRadius: '9999px',
                      background: 'linear-gradient(90deg, #6366f1 0%, #06b6d4 100%)',
                      boxShadow: '0 0 10px rgba(99, 102, 241, 0.5)'
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
