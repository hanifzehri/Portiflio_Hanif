import React, { useEffect, useState } from 'react'
import { IconDownload, IconMenu, IconClose, IconCube } from './Icons'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMobileMenuOpen(false)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('keydown', handleKeyDown)
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container site-header-inner">
        <a href="#home" className="brand" onClick={closeMenu} aria-label="Hanif Zehri home">
          <span className="brand-icon"><IconCube size={22} /></span>
          <span className="brand-copy">
            <strong>Hanif <span>Zehri</span></strong>
            <small>Web Developer</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => <a key={link.href} href={link.href}>{link.name}</a>)}
        </nav>

        <div className="desktop-actions">
          <a
            href="/assets/Muhammad_Hanif_Zehri_Resume.pdf"
            download="Muhammad_Hanif_Zehri_Resume.pdf"
            className="btn btn-secondary"
          >
            <IconDownload size={16} />
            Resume
          </a>
          <a href="#contact" className="btn btn-primary">Let’s talk</a>
        </div>

        <button
          type="button"
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls={mobileMenuOpen ? 'mobile-navigation' : undefined}
        >
          {mobileMenuOpen ? <IconClose size={22} /> : <IconMenu size={22} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="mobile-drawer" id="mobile-navigation" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>{link.name}</a>
          ))}
          <div className="mobile-drawer-actions">
            <a
              href="/assets/Muhammad_Hanif_Zehri_Resume.pdf"
              download="Muhammad_Hanif_Zehri_Resume.pdf"
              className="btn btn-secondary"
              onClick={closeMenu}
            >
              <IconDownload size={16} />
              Resume
            </a>
            <a href="#contact" className="btn btn-primary" onClick={closeMenu}>Contact</a>
          </div>
        </nav>
      )}
    </header>
  )
}
