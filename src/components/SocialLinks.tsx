import React from 'react';
import {
  Mail,
  Github,
  Twitter,
  Bookmark,
  CircleFadingPlus,
  Instagram,
} from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <a
        href="https://www.instagram.com/ll.tqlha/"
        className="text-gray-500 hover:text-gray-300 transition-colors"
      >
        <Instagram size={20} />
      </a>
      <a
        href="https://github.com/twiez"
        className="text-gray-500 hover:text-gray-300 transition-colors"
      >
        <Github size={20} />
      </a>
      <a
        href="https://x.com/twiezbtw"
        className="text-gray-500 hover:text-gray-300 transition-colors"
      >
        <Twitter size={20} />
      </a>
      <a
        href="https://twiez.bearblog.dev/blog/"
        className="text-gray-500 hover:text-gray-300 transition-colors"
      >
        <CircleFadingPlus size={20} />
      </a>
    </div>
  );
}
