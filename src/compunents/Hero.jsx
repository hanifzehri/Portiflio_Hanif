import React from 'react'
import {
  IconMapPin,
  IconDownload,
  IconArrowRight,
  IconGitHub,
  IconLinkedIn,
  IconMail
} from './Icons'

export default function Hero() {
  return (
    <section id="home" className="section hero-section">
      <div className="container">
        <div className="hero-layout">
          <div className="hero-copy">
            <div className="hero-intro-badges">
              <div className="status-badge">
                <span className="status-dot" />
                <span>Available for New Projects</span>
              </div>
              <span className="pill">
                <IconMapPin size={15} />
                Khuzdar, Balochistan, Pakistan
              </span>
            </div>

            <p className="hero-eyebrow">Hello, I’m</p>
            <h1 className="hero-title">
              Muhammad Hanif <span className="gradient-text">Zehri</span>
            </h1>
            <p className="hero-role">Web Developer &amp; MERN Stack Specialist</p>
            <p className="hero-description">
              I build responsive, accessible web applications with React.js, Node.js,
              Express.js, and MongoDB—turning thoughtful ideas into polished digital experiences.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                <span>Explore my projects</span>
                <IconArrowRight size={18} />
              </a>
              <a
                href="/assets/Muhammad_Hanif_Zehri_Resume.pdf"
                download="Muhammad_Hanif_Zehri_Resume.pdf"
                className="btn btn-secondary"
              >
                <IconDownload size={18} />
                <span>Download CV</span>
              </a>
              <a href="#contact" className="btn btn-outline-glow">
                <IconMail size={18} />
                <span>Contact me</span>
              </a>
            </div>

            <div className="hero-socials" aria-label="Social profiles">
              <span>Connect</span>
              <a href="https://github.com/hanifzehri" target="_blank" rel="noreferrer" aria-label="GitHub profile">
                <IconGitHub size={20} />
              </a>
              <a href="https://linkedin.com/in/hanifzehri" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                <IconLinkedIn size={20} />
              </a>
              <a href="mailto:hanifzehri.dev@gmail.com" aria-label="Send email">
                <IconMail size={20} />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
            <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
            <div className="hero-profile-card">
              <div className="hero-photo">
                <img
                  src="/profile.png"
                  alt="Muhammad Hanif Zehri"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
