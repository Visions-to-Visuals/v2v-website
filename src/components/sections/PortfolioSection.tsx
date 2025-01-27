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
    <div className="relative mt-4 md:mt-0 w-full md:w-[200px] h-[40px] rounded-full bg-black border-2 border-white p-[2px]">
      <div className="relative w-full h-full rounded-full overflow-hidden">
        <div 
          className={`absolute inset-0 w-1/2 h-full rounded-full transition-transform duration-300 ease-in-out ${
            isAfter ? 'translate-x-full bg-gradient-to-r from-[#FF6B6B] to-[#FFD700]' : 'translate-x-0 bg-gradient-to-r from-[#FF6B6B] to-[#FFD700]'
          }`}
        />
        <div className="absolute inset-0 flex">
          <button
            onClick={() => onChange(false)}
            className={`flex-1 flex items-center justify-center text-sm font-medium transition-colors ${
              !isAfter ? 'text-black' : 'text-white'
            }`}
          >
            Before
          </button>
          <button
            onClick={() => onChange(true)}
            className={`flex-1 flex items-center justify-center text-sm font-medium transition-colors ${
              isAfter ? 'text-black' : 'text-white'
            }`}
          >
            After
          </button>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const [isAfter, setIsAfter] = useState(true);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center md:flex-row flex-col mb-4">
        <h3 className="text-xl">{project.title}</h3>
        <BeforeAfterToggle isAfter={isAfter} onChange={setIsAfter} />
      </div>

      {/* Image */}
      <div className="relative aspect-[16/9] w-full mb-4 overflow-hidden rounded-lg">
        <Image
          src={project.beforeImage}
          alt={`${project.title} before redesign`}
          fill
          className={`object-cover transition-transform duration-500 absolute inset-0 ${
            isAfter ? '-translate-x-full' : 'translate-x-0'
          }`}
        />
        <Image
          src={project.afterImage}
          alt={`${project.title} after redesign`}
          fill
          className={`object-cover transition-transform duration-500 absolute inset-0 ${
            isAfter ? 'translate-x-0' : 'translate-x-full'
          }`}
        />
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <p className="text-gray-400">{project.date}</p>
        </div>
        {project.visitUrl ? (
          <a 
            href={project.visitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors underline"
          >
            Visit Website
            <Image 
              src="/assets/arrow-diagonal.svg"
              alt="Arrow"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </a>
        ) : project.status && (
          <span className="">{project.status}</span>
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
          <span className="text-[12px] md:text-base text-[#FFD700] block mb-0 md:mb-4">REAL CLIENTS WITH REAL SOLUTIONS</span>
          <h2 className="text-[28px] md:text-4xl">See our latest projects</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
} 