import React, { useState } from 'react'
import {
  IconMail,
  IconMapPin,
  IconGitHub,
  IconLinkedIn,
  IconDownload,
  IconCopy,
  IconCheck,
  IconSparkles,
  IconArrowRight
} from './Icons'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const emailAddress = 'hanifzehri.dev@gmail.com'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (errorMsg) setErrorMsg('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in all required fields.')
      return
    }

    setSubmitted(true)
  }

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' })
    setSubmitted(false)
    setErrorMsg('')
  }

  return (
    <section id="contact" className="section" style={{ background: 'rgba(10, 15, 29, 0.4)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <IconSparkles size={14} />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <br />
            <span className="gradient-text">Exceptional Together</span>
          </h2>
          <p className="section-subtitle">
            Whether you have a web development project, an exciting opportunity, or want to discuss technology,
            I'm ready to connect.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            maxWidth: '1050px',
            margin: '0 auto'
          }}
        >
          {/* Left: Contact Info Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Email Card with Copy Feature */}
            <div
              className="glass-card"
              style={{
                padding: '28px',
                borderRadius: '20px',
                background: 'rgba(15, 23, 42, 0.75)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(99, 102, 241, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#818cf8'
                  }}
                >
                  <IconMail size={22} />
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="btn btn-secondary"
                  style={{ padding: '6px 14px', fontSize: '0.8rem' }}
                >
                  {copied ? <IconCheck size={14} style={{ color: '#10b981' }} /> : <IconCopy size={14} />}
                  <span>{copied ? 'Copied!' : 'Copy Email'}</span>
                </button>
              </div>

              <div style={{ fontSize: '0.82rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: '600' }}>
                Direct Email
              </div>
              <a
                href={`mailto:${emailAddress}`}
                style={{
                  fontSize: '1.15rem',
                  fontWeight: '700',
                  color: '#ffffff',
                  display: 'inline-block',
                  marginTop: '4px',
                  marginBottom: '6px'
                }}
              >
                {emailAddress}
              </a>
              <p style={{ fontSize: '0.86rem', color: '#64748b' }}>
                Fastest response for inquiries, project bids, or consultations.
              </p>
            </div>

            {/* Location Card */}
            <div
              className="glass-card"
              style={{
                padding: '28px',
                borderRadius: '20px',
                background: 'rgba(15, 23, 42, 0.75)'
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(6, 182, 212, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#22d3ee',
                  marginBottom: '16px'
                }}
              >
                <IconMapPin size={22} />
              </div>

              <div style={{ fontSize: '0.82rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: '600' }}>
                Location
              </div>
              <div style={{ fontSize: '1.15rem', fontWeight: '700', color: '#ffffff', marginTop: '4px', marginBottom: '6px' }}>
                Khuzdar, Balochistan, Pakistan
              </div>
              <p style={{ fontSize: '0.86rem', color: '#64748b' }}>
                Open to remote contracts worldwide and regional on-site collaborations.
              </p>
            </div>

            {/* Social Links & Resume Card */}
            <div
              className="glass-card"
              style={{
                padding: '28px',
                borderRadius: '20px',
                background: 'rgba(15, 23, 42, 0.75)'
              }}
            >
              <div style={{ fontSize: '0.82rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: '600', marginBottom: '16px' }}>
                Profiles &amp; Documents
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                <a
                  href="https://github.com/hanifzehri"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  style={{ padding: '10px 14px', fontSize: '0.86rem' }}
                >
                  <IconGitHub size={18} />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://linkedin.com/in/hanifzehri"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  style={{ padding: '10px 14px', fontSize: '0.86rem' }}
                >
                  <IconLinkedIn size={18} />
                  <span>LinkedIn</span>
                </a>
              </div>

              <a
                href="/assets/Muhammad_Hanif_Zehri_Resume.pdf"
                download="Muhammad_Hanif_Zehri_Resume.pdf"
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <IconDownload size={18} />
                <span>Download Full CV (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div
            className="glass-card"
            style={{
              padding: '36px',
              borderRadius: '24px',
              background: 'rgba(15, 23, 42, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            {submitted ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '380px',
                  textAlign: 'center'
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.2)',
                    color: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}
                >
                  <IconCheck size={32} />
                </div>

                <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#ffffff', marginBottom: '10px' }}>
                  Your message is ready
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.98rem', maxWidth: '380px', lineHeight: 1.6, marginBottom: '24px' }}>
                  Thank you, <strong style={{ color: '#ffffff' }}>{formData.name}</strong>. Your message is ready.
                  Select “Open in Email Client” to send it to Muhammad Hanif Zehri from your email app.
                </p>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <a
                    href={`mailto:${emailAddress}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Hanif,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`}
                    className="btn btn-primary"
                  >
                    <span>Open in Email Client</span>
                  </a>

                  <button onClick={handleReset} className="btn btn-secondary">
                    Send Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#ffffff' }}>
                  Send a Direct Message
                </h3>

                {errorMsg && (
                  <div
                    style={{
                      padding: '10px 16px',
                      borderRadius: '10px',
                      background: 'rgba(239, 68, 68, 0.15)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      color: '#fca5a5',
                      fontSize: '0.86rem'
                    }}
                  >
                    {errorMsg}
                  </div>
                )}

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '600', color: '#cbd5e1', marginBottom: '8px' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      transition: 'border 0.2s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#6366f1')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '600', color: '#cbd5e1', marginBottom: '8px' }}>
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      transition: 'border 0.2s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#6366f1')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '600', color: '#cbd5e1', marginBottom: '8px' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Web Development Project Inquiry"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      transition: 'border 0.2s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#6366f1')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '600', color: '#cbd5e1', marginBottom: '8px' }}>
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Hanif, I would like to discuss..."
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border 0.2s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#6366f1')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px', marginTop: '6px' }}>
                  <span>Send Message</span>
                  <IconArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
