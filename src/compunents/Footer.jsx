import React from 'react'
import { IconCube, IconGitHub, IconLinkedIn, IconMail } from './Icons'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-about">
            <a href="#home" className="brand footer-brand">
              <span className="brand-icon"><IconCube size={21} /></span>
              <span className="brand-copy">
                <strong>Muhammad Hanif Zehri</strong>
                <small>Web Developer</small>
              </span>
            </a>
            <p>
              Web Developer based in Khuzdar, Balochistan, Pakistan. Building responsive
              web applications and clean REST APIs.
            </p>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="footer-socials">
            <a href="https://github.com/hanifzehri" target="_blank" rel="noreferrer" aria-label="GitHub">
              <IconGitHub size={19} />
            </a>
            <a href="https://linkedin.com/in/hanifzehri" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <IconLinkedIn size={19} />
            </a>
            <a href="mailto:hanifzehri.dev@gmail.com" aria-label="Email">
              <IconMail size={19} />
            </a>
            <button type="button" className="btn btn-secondary" onClick={scrollToTop}>↑ Top</button>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Muhammad Hanif Zehri. All rights reserved.</span>
          <span>Designed and built with React.js · Khuzdar, Pakistan</span>
        </div>
      </div>
    </footer>
  )
}
