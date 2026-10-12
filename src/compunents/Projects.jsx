
import React, { useEffect, useState } from 'react'
import { IconArrowRight, IconClose, IconSparkles } from './Icons'

const projectList = [
  {
    id: 'bookverse',
    title: 'BookVerse',
    category: 'Online Bookstore',
    description: 'A modern online bookstore featuring book listings, search, categories, shopping cart, and a responsive user interface.',
    tags: ['React', 'Vite', 'Local Storage', 'Responsive UI'],
    preview: 'bookverse',
    image: '/assets/project-previews/bookverse.svg',
    githubUrl: 'https://bookstore-frontend-zeta-ten.vercel.app/',
    demoUrl: 'https://bookstore-frontend-zeta-ten.vercel.app/'
  },
  {
    id: 'chat app',
    title: 'online chatapp',
    category: 'Hostel Management System',
    description: 'A hostel management dashboard for student profiles, room allocation, fee tracking, staff management, expenses, and reports.',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    preview: 'hostel',
    image: '/assets/project-previews/royal-hostel.svg',
    githubUrl: 'https://github.com/hanifzehri/hostel-managment',
    demoUrl: '#'
  },
  {
    id: 'expense tracker',
    title: 'expness tracker',
    category: 'Educational AI Platform',
    description: 'An educational AI platform concept designed to help students learn mathematics, physics, chemistry, biology, and web development.',
    tags: ['AI Learning', 'Education', 'React', 'Web App Concept'],
    preview: 'smit',
    image: '/assets/project-previews/smit-ai.svg',
    demoUrl: '#'
  },
  {
    id: 'khuzdar-travel',
    title: 'Khuzdar Travel',
    category: 'Travel & Booking Website',
    description: 'A travel website concept featuring destinations, travel information, booking options, and travel assistance for people in Khuzdar and Balochistan.',
    tags: ['Travel', 'Booking UI', 'React', 'Responsive Design'],
    preview: 'travel',
    image: '/assets/project-previews/khuzdar-travel.svg',
    demoUrl: '#'
  },
  {
    id: 'child-protection',
    title: 'Saylani Child Protection Pakistan',
    category: 'Awareness Website',
    description: 'A child protection awareness website concept featuring safety information, educational resources, reporting guidance, and a secure admin dashboard concept.',
    tags: ['Awareness', 'Accessibility', 'React', 'Web App Concept'],
    preview: 'child',
    image: '/assets/project-previews/child-protection.svg',
    demoUrl: '#'
  },
  {
    id: 'codeinterview',
    title: 'CodeInterview',
    category: 'Collaborative Coding Platform',
    description: 'A coding platform concept featuring a collaborative code editor, programming challenges, interview practice, and real-time collaboration features.',
    tags: ['Code Editor', 'Developer Tools', 'React', 'Web App Concept'],
    preview: 'code',
    image: '/assets/project-previews/codeinterview.svg',
    demoUrl: '#'
  }
]

function ProjectPreview({ project }) {
  return (
    <div
      className={`project-preview preview-${project.preview}`}
    >
      <img
        className="project-preview-image"
        src={project.image}
        alt={`${project.title} project preview`}
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    if (!selectedProject) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedProject(null)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedProject])

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <IconSparkles size={14} />
            <span>Selected Work</span>
          </div>
          <h2 className="section-title">
            Projects with <span className="gradient-text">Purpose</span>
          </h2>
          <p className="section-subtitle">
            A collection of web experiences and product concepts focused on useful, approachable interfaces.
          </p>
        </div>

        <div className="project-grid">
          {projectList.map((project) => (
            <article className="project-card" key={project.id}>
              <ProjectPreview project={project} />
              <div className="project-card-body">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="project-tags" aria-label={`${project.title} technologies and focus`}>
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <div className="project-actions">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setSelectedProject(project)}
                    aria-label={`View ${project.title} overview`}
                  >
                    <span>Project overview</span>
                    <IconArrowRight size={17} />
                  </button>

                  {project.demoUrl && (
                    <a
                      className="btn btn-secondary"
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.title} demo`}
                    >
                      Demo
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      className="btn btn-secondary"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="project-modal-backdrop"
          onClick={() => setSelectedProject(null)}
        >
          <section
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="project-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project overview"
            >
              <IconClose size={20} />
            </button>
            <span className="project-category">{selectedProject.category}</span>
            <h3 id="project-modal-title">{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <ul className="project-tags" aria-label="Project technologies and focus">
              {selectedProject.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
          </section>
        </div>
      )}
    </section>
  )
}
