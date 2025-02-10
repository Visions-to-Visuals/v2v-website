'use client'
// animate squares on the screen

import React, { useEffect, useRef } from 'react';

interface Square {
    x: number;
    y: number;
    brightness: number;
    lastHovered: number;
    isHovered: boolean;
}

const Squares: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const squaresRef = useRef<Square[][]>([]);
    const heightRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Square properties
        const squareSize = 50;
        const gap = 0;
        const borderWidth = 1;
        const fadeOutDuration = 2000; // 2 seconds in milliseconds

        // Get square coordinates from mouse position
        const getSquareCoords = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            return {
                col: Math.floor(x / squareSize),
                row: Math.floor(y / squareSize)
            };
        };

        // Set canvas size to match viewport
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            heightRef.current = window.innerHeight;

            // Recalculate grid on resize
            const cols = Math.ceil(canvas.width / (squareSize + gap));
            const rows = Math.ceil(canvas.height / (squareSize + gap));
            
            // Preserve existing square states while rebuilding grid
            const oldSquares = squaresRef.current;
            squaresRef.current = Array(cols).fill(null).map((_, i) => 
                Array(rows).fill(null).map((_, j) => {
                    // Try to preserve state from existing squares if they exist
                    const existingSquare = oldSquares[i]?.[j];
                    return {
                        x: i * (squareSize + gap),
                        y: j * (squareSize + gap),
                        brightness: existingSquare?.brightness || 0,
                        lastHovered: existingSquare?.lastHovered || 0,
                        isHovered: existingSquare?.isHovered || false
                    };
                })
            );
        };

        // Initial resize
        resizeCanvas();

        // Add resize listener for both width and height
        window.addEventListener('resize', resizeCanvas);

        // Handle mouse movement
        const handleMouseMove = (e: MouseEvent) => {
            const { col, row } = getSquareCoords(e);
            const cols = squaresRef.current.length;
            const rows = squaresRef.current[0]?.length || 0;
            
            // Reset all squares' isHovered state
            squaresRef.current.forEach(column => 
                column.forEach(square => {
                    if (square.isHovered) {
                        square.isHovered = false;
                        square.lastHovered = Date.now();
                    }
                })
            );
            
            // Set new hovered square
            if (col >= 0 && col < cols && row >= 0 && row < rows) {
                const square = squaresRef.current[col][row];
                square.brightness = 1;
                square.isHovered = true;
            }
        };

        // Handle mouse leave
        const handleMouseLeave = () => {
            squaresRef.current.forEach(column => 
                column.forEach(square => {
                    if (square.isHovered) {
                        square.isHovered = false;
                        square.lastHovered = Date.now();
                    }
                })
            );
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('mousemove', handleMouseMove);
            container.addEventListener('mouseleave', handleMouseLeave);
        }

        // Animation
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            const currentTime = Date.now();
            
            squaresRef.current.forEach((column) => {
                column.forEach((square) => {
                    // Calculate vertical position opacity multiplier
                    const verticalProgress = square.y / canvas.height;
                    const opacityMultiplier = verticalProgress <= 0.5 
                        ? 1 
                        : Math.max(0, 1 - ((verticalProgress - 0.5) * 2));

                    // Only start fading if the square is not hovered and was previously hovered
                    if (!square.isHovered && square.lastHovered > 0) {
                        const timeSinceHover = currentTime - square.lastHovered;
                        if (timeSinceHover < fadeOutDuration) {
                            square.brightness = Math.max(0, 1 - (timeSinceHover / fadeOutDuration));
                        } else {
                            square.brightness = 0;
                        }
                    }
                    
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(255, 255, 255, ${0.05 * opacityMultiplier})`;
                    ctx.lineWidth = borderWidth;
                    
                    // Add glow effect based on brightness
                    if (square.brightness > 0) {
                        const adjustedBrightness = square.brightness * opacityMultiplier;
                        ctx.shadowBlur = 10 * adjustedBrightness;
                        ctx.shadowColor = `rgba(255, 255, 255, ${adjustedBrightness})`;
                        ctx.strokeStyle = `rgba(255, 255, 255, ${(0.1 + (square.brightness * 0.1)) * opacityMultiplier})`;
                    } else {
                        ctx.shadowBlur = 0;
                    }
                    
                    ctx.rect(square.x, square.y, squareSize, squareSize);
                    ctx.stroke();
                });
            });
            
            requestAnimationFrame(animate);
        };

        animate();
        console.log(squaresRef.current) 
        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (container) {
                container.removeEventListener('mousemove', handleMouseMove);
                container.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute top-0 left-0 w-full h-full">
            <canvas
                ref={canvasRef}
                className='absolute top-0 left-0 w-full pointer-events-none'
            />
        </div>
    );
};

export default Squares;

    
