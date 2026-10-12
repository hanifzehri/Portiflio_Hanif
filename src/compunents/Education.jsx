import React from 'react'
import {
  IconGraduation,
  IconMapPin,
  IconSparkles,
  IconCheck
} from './Icons'

export default function Education() {
  const educationTimeline = [
    {
      degree: 'FSc Pre-Engineering',
      institution: 'Boys Degree College Khuzdar',
      location: 'Khuzdar, Balochistan, Pakistan',
      badge: 'Higher Secondary Certificate',
      accentColor: '#6366f1',
      description:
        'Intensive academic training in advanced mathematics, physics, and analytical problem-solving. This engineering curriculum provided the mathematical logic, structural reasoning, and discipline needed to excel in modern full-stack web software development.',
      highlights: [
        'Advanced Mathematics (Calculus, Algebra, Analytical Geometry)',
        'Physics & Systems Analysis',
        'Algorithmic & logical problem-solving foundations'
      ]
    },
    {
      degree: 'Matriculation in Science',
      institution: 'FCPS College Khuzdar',
      location: 'Khuzdar, Balochistan, Pakistan',
      badge: 'Secondary School Certificate',
      accentColor: '#06b6d4',
      description:
        'Fundamental science and computer studies education that sparked passion for computing, technology, and systematic inquiry. Built solid foundations in science and mathematical reasoning.',
      highlights: [
        'Fundamental Sciences & Computer Studies',
        'Mathematics & Logical Reasoning',
        'Academic discipline and technical curiosity'
      ]
    }
  ]

  return (
    <section id="education" className="section" style={{ background: 'rgba(10, 15, 29, 0.4)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <IconSparkles size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education &amp; <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="section-subtitle">
            A solid scientific and pre-engineering background fostering analytical precision and algorithmic clarity.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '28px'
          }}
        >
          {educationTimeline.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '32px',
                borderRadius: '24px',
                borderLeft: `4px solid ${item.accentColor}`,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px',
                alignItems: 'flex-start'
              }}
            >
              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: '700',
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: item.accentColor
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.45rem', fontWeight: '800', color: '#ffffff', marginBottom: '6px' }}>
                  {item.degree}
                </h3>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '1.05rem',
                    fontWeight: '600',
                    color: '#e2e8f0',
                    marginBottom: '8px'
                  }}
                >
                  <IconGraduation size={20} style={{ color: item.accentColor }} />
                  <span>{item.institution}</span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.86rem',
                    color: '#94a3b8'
                  }}
                >
                  <IconMapPin size={15} style={{ color: '#06b6d4' }} />
                  <span>{item.location}</span>
                </div>
              </div>

              <div>
                <p style={{ color: '#94a3b8', fontSize: '0.94rem', lineHeight: 1.65, marginBottom: '16px' }}>
                  {item.description}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div
                        style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          background: 'rgba(99, 102, 241, 0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#818cf8',
                          flexShrink: 0
                        }}
                      >
                        <IconCheck size={12} />
                      </div>
                      <span style={{ fontSize: '0.86rem', color: '#cbd5e1' }}>
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
