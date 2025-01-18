"use client"

import Image from 'next/image'
import { useState } from 'react'

interface Project {
  title: string;
  date: string;
  status: string;
  beforeImage: string;
  afterImage: string;
  visitUrl?: string;
}

function BeforeAfterToggle({ isAfter, onChange }: { isAfter: boolean; onChange: (isAfter: boolean) => void }) {
  return (
    <div className="flex items-center bg-black/80 backdrop-blur rounded-full p-1">
      <button
        onClick={() => onChange(false)}
        className={`px-3 py-1 rounded-full text-sm transition-colors ${
          !isAfter ? 'bg-white text-black' : 'text-white'
        }`}
      >
        Before
      </button>
      <button
        onClick={() => onChange(true)}
        className={`px-3 py-1 rounded-full text-sm transition-colors ${
          isAfter ? 'bg-[#FF6B6B] text-white' : 'text-white'
        }`}
      >
        After
      </button>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const [isAfter, setIsAfter] = useState(true);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl">{project.title}</h3>
        <BeforeAfterToggle isAfter={isAfter} onChange={setIsAfter} />
      </div>

      {/* Image */}
      <div className="relative aspect-[16/9] w-full mb-4">
        <Image
          src={isAfter ? project.afterImage : project.beforeImage}
          alt={`${project.title} ${isAfter ? 'after' : 'before'} redesign`}
          fill
          className="object-cover transition-opacity duration-300 rounded-lg"
        />
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <p className="text-gray-400">{project.date}</p>
          {project.status && (
            <span className="text-gray-400">{project.status}</span>
          )}
        </div>
        {project.visitUrl && (
          <a 
            href={project.visitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#FFD700] hover:text-white transition-colors"
          >
            Visit Website →
          </a>
        )}
      </div>
    </div>
  );
}

export function PortfolioSection() {
  const projects: Project[] = [
    {
      title: "California Invention Convention",
      date: "February 2025",
      status: "In Development",
      beforeImage: "/assets/before/California-Invention-Convention.png",
      afterImage: "/assets/after/California-Invention-Convention.png"
    },
    {
      title: "Golden State Ponds",
      date: "January 2025",
      status: "",
      beforeImage: "/assets/before/Golden-State-Ponds.png",
      afterImage: "/assets/after/Golden-State-Ponds.png",
      visitUrl: "#"
    },
    {
      title: "ChalkWild",
      date: "November 2024",
      status: "",
      beforeImage: "/assets/before/ChalkWild.png",
      afterImage: "/assets/after/ChalkWild.png",
      visitUrl: "#"
    },
    {
      title: "All People's Presbyterian Church",
      date: "September 2024",
      status: "",
      beforeImage: "/assets/before/APPC.png",
      afterImage: "/assets/after/APPC.png",
      visitUrl: "#"
    }
  ];

  return (
    <section className="flex flex-col items-center w-full bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#FFD700] block mb-4">REAL CLIENTS WITH REAL SOLUTIONS</span>
          <h2 className="text-4xl">See our latest projects</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
} 