import React from 'react'

export default function ThreeDExperience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>Design &amp; Frontend Experience</span>
          </div>
          <h2 className="section-title">
            Clean <span className="gradient-text">Product Thinking</span>
          </h2>
          <p className="section-subtitle">
            I build polished interfaces, smooth user flows, and accessible experiences that feel intentional on every screen.
          </p>
        </div>

        <div
          className="glass-card"
          style={{
            maxWidth: '1050px',
            margin: '0 auto',
            borderRadius: '28px',
            padding: '32px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            background: 'rgba(15, 23, 42, 0.85)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6), 0 0 35px rgba(99, 102, 241, 0.2)'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {[
              ['Responsive UI', 'Layouts that stay clean across desktops, tablets, and mobile devices.'],
              ['Performance', 'Lightweight frontends, fast interactions, and efficient rendering patterns.'],
              ['Accessibility', 'Readable content, focus states, and accessible navigation for real users.'],
              ['Product Delivery', 'From wireframes to polished pages, built with maintainable code and clear structure.']
            ].map(([title, text]) => (
              <div
                key={title}
                style={{
                  padding: '22px 18px',
                  borderRadius: '18px',
                  background: 'rgba(15, 23, 42, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <h3 style={{ margin: '0 0 12px', fontSize: '1.08rem', color: '#ffffff' }}>{title}</h3>
                <p style={{ margin: 0, color: '#94a3b8', lineHeight: 1.7 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
