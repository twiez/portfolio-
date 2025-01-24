import React from 'react';
import SocialLinks from './SocialLinks';

export default function Profile() {
  return (
    <div className="w-full max-w-md space-y-4">
      <h1 className="text-2xl">
        <span className="text-yellow-400">👋</span> hey! i'm twiez
      </h1>
      <p className="text-gray-400">
        i tinker with things i find interesting i love writing code
      </p>
      <p className="text-gray-400">i'm also a full-stack developer.</p>
      <SocialLinks />
    </div>
  );
}
