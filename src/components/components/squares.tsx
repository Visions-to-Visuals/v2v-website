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
    const squaresRef = useRef<Square[][]>([]);
    const heightRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size to match initial viewport
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            // Only set height once to initial viewport height
            if (heightRef.current === 0) {
                heightRef.current = window.innerHeight;
                canvas.height = heightRef.current;
            }
        };

        // Initial resize
        resizeCanvas();

        // Add resize listener (only for width)
        window.addEventListener('resize', resizeCanvas);

        // Square properties
        const squareSize = 50;
        const gap = 0;
        const borderColor = 'rgba(255, 255, 255, 0.1)';
        const borderWidth = 1;
        const fadeOutDuration = 2000; // 2 seconds in milliseconds

        // Initialize squares grid
        const cols = Math.ceil(canvas.width / (squareSize + gap));
        const rows = Math.ceil(canvas.height / (squareSize + gap));
        
        squaresRef.current = Array(cols).fill(null).map((_, i) => 
            Array(rows).fill(null).map((_, j) => ({
                x: i * (squareSize + gap),
                y: j * (squareSize + gap),
                brightness: 0,
                lastHovered: 0,
                isHovered: false
            }))
        );

        // Get square coordinates from mouse position
        const getSquareCoords = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const col = Math.floor(x / squareSize);
            const row = Math.floor(y / squareSize);

            return { col, row };
        };

        // Handle mouse movement
        const handleMouseMove = (e: MouseEvent) => {
            const { col, row } = getSquareCoords(e);
            
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

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        // Animation
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            const currentTime = Date.now();
            
            squaresRef.current.forEach((column, i) => {
                column.forEach((square, j) => {
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
                    ctx.strokeStyle = borderColor;
                    ctx.lineWidth = borderWidth;
                    
                    // Add glow effect based on brightness
                    if (square.brightness > 0) {
                        ctx.shadowBlur = 10 * square.brightness;
                        ctx.shadowColor = `rgba(255, 255, 255, ${square.brightness})`;
                        ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 + (square.brightness * 0.9)})`;
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
        // console.log(squaresRef.current) 
        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: `${heightRef.current}px`,
                pointerEvents: 'auto',
                zIndex: 0
            }}
        />
    );
};

export default Squares;

    
