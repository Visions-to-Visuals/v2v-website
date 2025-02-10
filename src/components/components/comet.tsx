'use client'

import React, { useEffect, useRef } from 'react';

const Comet: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Load the comet.js script
    const script = document.createElement('script');
    script.src = '/comet.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='absolute left-0 w-full h-full'>
      <canvas 
        id="canvas1" 
        ref={canvasRef}
      />
    </div>
  );
};

export default Comet;