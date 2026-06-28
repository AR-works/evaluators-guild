'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';

interface Point3D {
  x: number;
  y: number;
  z: number;
  r?: number; // projected radius
  px?: number; // projected x
  py?: number; // projected y
}

export default function GlobeVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = canvas.width = 450;
    let height = canvas.height = 450;

    const handleResize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = canvas.width = rect.width * (window.devicePixelRatio || 1);
      height = canvas.height = rect.height * (window.devicePixelRatio || 1);
    };

    // Responsive scaling
    window.addEventListener('resize', handleResize);
    handleResize();

    // Generate points on a sphere (Fibonacci sphere distribution)
    const pointsCount = 140;
    const points: Point3D[] = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    for (let i = 0; i < pointsCount; i++) {
      const y = 1 - (i / (pointsCount - 1)) * 2; // y goes from 1 to -1
      const radius = Math.sqrt(1 - y * y); // Radius at y
      const theta = phi * i; // Golden angle increment

      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;

      points.push({ x, y, z });
    }

    // Rotational angles
    const angleY = 0.002; // slow constant horizontal rotation
    const angleX = 0.0005; // slow constant vertical rotation
    
    // Mouse interactive offsets
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Normalize values to [-1, 1] range
      targetMouseX = (x / (rect.width / 2)) * 0.015;
      targetMouseY = (y / (rect.height / 2)) * 0.015;
    };

    const handleMouseLeave = () => {
      targetMouseX = 0;
      targetMouseY = 0;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Animation Loop
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth interpolation for mouse movements
      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;

      const currentAngleY = angleY + mouseX;
      const currentAngleX = angleX - mouseY;

      const cosY = Math.cos(currentAngleY);
      const sinY = Math.sin(currentAngleY);
      const cosX = Math.cos(currentAngleX);
      const sinX = Math.sin(currentAngleX);

      // Sphere sizing based on canvas dims
      const sphereRadius = Math.min(width, height) * 0.35;
      const cx = width / 2;
      const cy = height / 2;

      // Rotate points and update coordinate tracking
      const projectedPoints = points.map((p) => {
        // Rotate around Y axis
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;

        // Rotate around X axis
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        // Perspective projection factor (distance from screen)
        const perspective = 2.5;
        const scale = perspective / (perspective + z2);

        // Project coordinate to 2D
        const px = cx + x1 * sphereRadius * scale;
        const py = cy + y2 * sphereRadius * scale;
        const r = 2.5 * scale; // size based on depth

        // Save rotated states back to the point
        p.x = x1;
        p.y = y2;
        p.z = z2;

        return { px, py, r, z: z2 };
      });

      // Node colors based on active theme
      const isDark = theme === 'dark';
      const nodeColor = isDark ? 'rgba(99, 102, 241, ' : 'rgba(79, 70, 229, '; // indigo-500 or indigo-600
      const lineColor = isDark ? 'rgba(167, 139, 250, ' : 'rgba(139, 92, 246, '; // violet-400 or violet-500

      // 1. Draw connections first (behind nodes)
      const maxDistance = sphereRadius * 0.45;
      for (let i = 0; i < projectedPoints.length; i++) {
        const p1 = projectedPoints[i];
        
        // Skip drawing lines for points that are strictly on the back side of the sphere to keep visual depth clean
        if (p1.z > 0.4) continue;

        for (let j = i + 1; j < projectedPoints.length; j++) {
          const p2 = projectedPoints[j];
          if (p2.z > 0.4) continue;

          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            // Opacity fades both with distance and with Z depth (near = opaque, far = transparent)
            const depthFade = (1 - (p1.z + p2.z) / 2); // closer to front is lower z, so value goes up
            const distanceFade = 1 - (dist / maxDistance);
            const lineOpacity = Math.max(0, distanceFade * depthFade * 0.15);

            if (lineOpacity > 0.01) {
              ctx.beginPath();
              ctx.moveTo(p1.px, p1.py);
              ctx.lineTo(p2.px, p2.py);
              ctx.strokeStyle = `${lineColor}${lineOpacity})`;
              ctx.lineWidth = 0.75;
              ctx.stroke();
            }
          }
        }
      }

      // 2. Draw nodes on top
      projectedPoints.forEach((p) => {
        // Opacity mapping (z goes from -1 [front] to 1 [back])
        const opacity = Math.max(0.1, 1 - (p.z + 1) / 2);

        ctx.beginPath();
        ctx.arc(p.px, p.py, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${nodeColor}${opacity})`;
        ctx.fill();
        
        // Add subtle outer bloom to front-most nodes
        if (p.z < -0.6) {
          ctx.beginPath();
          ctx.arc(p.px, p.py, p.r * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `${nodeColor}${opacity * 0.12})`;
          ctx.fill();
        }
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [theme]);

  return (
    <div className="w-full h-full flex items-center justify-center min-h-[300px] sm:min-h-[400px]">
      <canvas
        ref={canvasRef}
        className="w-full max-w-[450px] aspect-square select-none cursor-grab active:cursor-grabbing opacity-90 hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  );
}
