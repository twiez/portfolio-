import React from 'react';
import { Terminal, Download, Cat, ExternalLink } from 'lucide-react';
import type { Project } from '../types/project';

const icons = {
  cobalt: Terminal,
  imput: Download,
  'meow.camera': Cat,
};

export default function ProjectCard({ title, subtitle, description, url }: Project) {
  const Icon = icons[title as keyof typeof icons] || Terminal;

  return (
    <div className="bg-[#0A0A0A] rounded-lg p-4 hover:bg-[#0F0F0F] transition-all duration-300">
      <div className="flex items-start space-x-3">
        <div className="mt-1 text-[#7F7F7F]">
          <Icon size={20} />
        </div>
        <div className="space-y-2 flex-grow">
          <div className="flex items-center space-x-2">
            <span className="text-[#E0E0E0] font-medium">{title}</span>
            <span className="text-[#7F7F7F] text-sm">{subtitle}</span>
          </div>
          <p className="text-[#7F7F7F] text-sm leading-relaxed">
            {description}
          </p>
          <div className="flex justify-end mt-3">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-[#7F7F7F] hover:text-[#E0E0E0] transition-colors text-sm"
            >
              <span>view</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}