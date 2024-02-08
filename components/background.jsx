'use client';
import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const circles = [];

        // Create Circle object
        class Circle {
            constructor(x, y, radius, speed, directionAngle) {
                this.x = x;
                this.y = y;
                this.radius = radius;
                this.speed = speed;
                this.directionAngle = Math.PI / directionAngle;
                // SOH CAH TOA
                this.vector = {
                    x: Math.cos(this.directionAngle) * this.speed,
                    y: Math.sin(this.directionAngle) * this.speed
                };
                this.color = {
                    r: (Math.random() * 10000) % 256,
                    g: (Math.random() * 10000) % 256,
                    b: (Math.random() * 10000) % 256
                }
            }
            

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
                ctx.fillStyle = `rgb(
                    ${this.color.r}
                    ${this.color.g}
                    ${this.color.b}
                    )`;                
                ctx.fill();
            }

            update() {
                this.x += this.vector.x;
                this.y += this.vector.y;

                // Reverse direction if circle hits canvas edge
                if (this.x <= this.radius || this.x >= canvas.width - this.radius) {
                    this.vector.x *= -1;
                }
                if (this.y <= this.radius || this.y >= canvas.height - this.radius) {
                    this.vector.y *= -1;
                }

                this.draw();
            }
        }
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            circles.forEach(circle => {
                circle.x = Math.min(circle.x, canvas.width - circle.radius);
                circle.y = Math.min(circle.y, canvas.height - circle.radius);
            });
        }

        // Initialize canvas size
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);


        // Create circles at random positions
        for (let i = 0; i < 35; i++) {
            const radius = Math.random() * 10 + 5;
            const x = Math.random() * (canvas.width - radius * 2) + radius;
            const y = Math.random() * (canvas.height - radius * 2) + radius;
            const speed = Math.random() * 2 + 0.5;
            const directionAngle = Math.floor(Math.random() * 360);

            circles.push(new Circle(x, y, radius, speed, directionAngle));
        }

        // Update and draw all circles
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            circles.forEach(circle => circle.update());
            requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            circles.length = 0;
        };
    }, []);

    return <canvas ref = {canvasRef} className="absolute top-0 left-0 z-0 w-full h-full"></canvas>;
};

export default AnimatedBackground;