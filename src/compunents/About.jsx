import React from 'react'
import {
  IconGraduation,
  IconMapPin,
  IconCode,
  IconResponsive,
  IconRestApi,
  IconSparkles
} from './Icons'

const pillars = [
  {
    icon: <IconResponsive size={23} />,
    title: 'Responsive Interfaces',
    description: 'Mobile-first layouts that adapt smoothly from phones to desktop screens.'
  },
  {
    icon: <IconCode size={23} />,
    title: 'Modern Frontend',
    description: 'Reusable React components with clear structure and considered interactions.'
  },
  {
    icon: <IconRestApi size={23} />,
    title: 'Backend & APIs',
    description: 'Node.js and Express services connected to MongoDB data stores.'
  },
  {
    icon: <IconGraduation size={23} />,
    title: 'Accessible by Design',
    description: 'Readable content, useful keyboard navigation, and inclusive user flows.'
  }
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag"><IconSparkles size={14} /><span>About Me</span></div>
          <h2 className="section-title">
            Thoughtful code. <span className="gradient-text">Useful experiences.</span>
          </h2>
          <p className="section-subtitle">
            Based in Khuzdar, Balochistan, Pakistan—turning analytical thinking into responsive,
            user-friendly web applications.
          </p>
        </div>

        <div className="about-layout">
          <div className="about-profile-card">
            <img src="/profile.png" alt="Muhammad Hanif Zehri portrait" loading="lazy" />
            <div className="about-profile-location">
              <IconMapPin size={15} /> Khuzdar, Pakistan
            </div>
            <div className="about-quick-facts">
              <div><span>Role</span><strong>Web Developer</strong></div>
              <div><span>Education</span><strong>FSc Pre-Engineering</strong></div>
            </div>
          </div>

          <div className="about-content">
            <h3>Building clean, scalable web applications</h3>
            <p>
              I am Muhammad Hanif Zehri, a Web Developer from Khuzdar, Balochistan.
              My pre-engineering background taught me to approach problems with patience,
              logical reasoning, and attention to detail.
            </p>
            <p>
              I work with JavaScript and React.js for intuitive user interfaces, and Node.js,
              Express.js, and MongoDB for full-stack applications. I value maintainable code,
              thoughtful design, accessibility, and performance.
            </p>
            <div className="about-pillars">
              {pillars.map((pillar) => (
                <article className="glass-card about-pillar" key={pillar.title}>
                  <span className="about-pillar-icon">{pillar.icon}</span>
                  <h4>{pillar.title}</h4>
                  <p>{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
