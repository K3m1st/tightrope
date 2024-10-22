import React from 'react';

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <img
        className="h-32 w-32 animate-pulse"
        src="/logo.png"
        alt="Tightrope Logo"
      />
    </div>
  );
}

export default Loading; // Make sure to export the component as default
