
import React, { useRef, useEffect, useState } from 'react';

interface DrawingCanvasProps {
  brushType: string;
  brushSize: number;
  brushColor: string;
  canvasColor: string;
  backgroundImage: string | null;
}

const DrawingCanvas: React.FC<DrawingCanvasProps> = ({
  brushType,
  brushSize,
  brushColor,
  canvasColor,
  backgroundImage
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastX, setLastX] = useState(0);
  const [lastY, setLastY] = useState(0);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas size to match parent container
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
        
        // Clear canvas with the selected color
        const context = canvas.getContext('2d');
        if (context) {
          context.fillStyle = canvasColor;
          context.fillRect(0, 0, canvas.width, canvas.height);
        }
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Set up canvas context
    const context = canvas.getContext('2d');
    if (context) {
      context.lineCap = 'round';
      context.lineJoin = 'round';
      context.strokeStyle = brushColor;
      context.lineWidth = brushSize;
      
      // Fill canvas with initial color
      context.fillStyle = canvasColor;
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      contextRef.current = context;
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [canvasColor]);

  // Update brush properties when they change
  useEffect(() => {
    const context = contextRef.current;
    if (context) {
      context.strokeStyle = brushColor;
      context.lineWidth = brushSize;
      
      switch(brushType) {
        case 'pen':
          context.globalAlpha = 1;
          context.lineJoin = 'round';
          context.lineCap = 'round';
          break;
        case 'brush':
          context.globalAlpha = 0.5;
          context.lineJoin = 'round';
          context.lineCap = 'round';
          break;
        case 'smudge':
          context.globalAlpha = 0.1;
          context.lineJoin = 'round';
          context.lineCap = 'round';
          break;
        case 'finger':
          context.globalAlpha = 0.3;
          context.lineJoin = 'round';
          context.lineCap = 'round';
          break;
        default:
          context.globalAlpha = 1;
      }
    }
  }, [brushType, brushSize, brushColor]);

  // Load background image if provided
  useEffect(() => {
    if (backgroundImage && canvasRef.current && contextRef.current) {
      const canvas = canvasRef.current;
      const context = contextRef.current;
      
      const img = new Image();
      img.onload = () => {
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
      img.src = backgroundImage;
    }
  }, [backgroundImage]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setIsDrawing(true);
    setLastX(x);
    setLastY(y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !contextRef.current) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    contextRef.current.beginPath();
    
    // Different brush types behavior
    if (brushType === 'smudge') {
      // Smudge effect
      for (let i = 0; i < 3; i++) {
        const lx = lastX + (x - lastX) * (i / 3);
        const ly = lastY + (y - lastY) * (i / 3);
        contextRef.current.lineTo(lx, ly);
      }
    } else if (brushType === 'finger') {
      // Finger smudge effect
      const dx = x - lastX;
      const dy = y - lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx);
      
      for (let i = 0; i < dist; i += 5) {
        const px = lastX + Math.cos(angle) * i;
        const py = lastY + Math.sin(angle) * i;
        
        contextRef.current.moveTo(px + brushSize/2, py);
        contextRef.current.arc(px, py, brushSize/2, 0, Math.PI * 2);
      }
    } else {
      // Normal brush
      contextRef.current.moveTo(lastX, lastY);
      contextRef.current.lineTo(x, y);
    }
    
    contextRef.current.stroke();
    setLastX(x);
    setLastY(y);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full cursor-crosshair"
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseLeave={stopDrawing}
    />
  );
};

export default DrawingCanvas;
