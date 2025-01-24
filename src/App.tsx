import React from 'react';
import Profile from './components/Profile';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-terminal-black text-terminal-text font-mono">
      <div className="max-w-[100rem] mx-auto min-h-screen grid grid-cols-1 md:grid-cols-2 gap-24">
        <div className="flex items-center justify-end p-8 md:p-16">
          <div className="w-full max-w-md md:mr-24">
            <Profile />
          </div>
        </div>
        <div className="flex items-center justify-start p-8 md:p-16">
          <div className="w-full max-w-md md:ml-24">
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;