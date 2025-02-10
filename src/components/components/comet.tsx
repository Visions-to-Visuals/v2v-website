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

    // Set initial canvas size
    const updateCanvasSize = () => {
      if (canvasRef.current) {
        const footer = document.getElementById('footer');
        if (footer) {
          const footerTop = footer.getBoundingClientRect().top;
          // calculate distance from top of canvas to top of footer
          const distance = footerTop - canvasRef.current.getBoundingClientRect().top;
          canvasRef.current.width = window.innerWidth;
          canvasRef.current.height = distance + 300;
        } else {
          // Fallback to window height if footer not found
          canvasRef.current.width = window.innerWidth;
          canvasRef.current.height = window.innerHeight;
        }
      }
    };

    // Set initial size and add resize listener
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    // Also update on scroll as footer position might change
    window.addEventListener('scroll', updateCanvasSize);

    return () => {
      // Cleanup script and event listeners on unmount
      document.body.removeChild(script);
      window.removeEventListener('resize', updateCanvasSize);
      window.removeEventListener('scroll', updateCanvasSize);
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