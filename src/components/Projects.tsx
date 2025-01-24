import React from 'react';
import ProjectCard from './ProjectCard';
import type { Project } from '../types/project';

const projects: Project[] = [
  {
    title: 'Speed Reader',
    subtitle: '@twiezbtw',
    description:
      'This app helps you increase your reading speed using the Optimal Recognition Point (ORP) method.',
    url: 'https://speadreader.netlify.app/',
  },
  {
    title: 'Netseek',
    subtitle: '@twiezbtw',
    description:
      'Netseek is a Python-based project designed to track IP addresses and provide detailed information about them.',
    url: 'https://github.com/twiez/netseek',
  },
  {
    title: 'Notepad',
    subtitle: '@twiezbtw',
    description:
      'This project is a minimalistic and modern notepad application. With its user-friendly interface, it facilitates quick note taking, editing and deleting. It has a simple design and is developed in Python.',
    url: 'https://twieznotepad.netlify.app/',
  },
];

export default function Projects() {
  return (
    <div className="w-full max-w-md space-y-3">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
}