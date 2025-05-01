
import React, { useRef, useState, useEffect } from "react";


interface DrawingCanvasProps {
  brushColor: string;
  brushSize: number;
  brushType: string;
  canvasColor: string;
}


const DrawingCanvas: React.FC<DrawingCanvasProps> = ({
  brushColor,
  brushSize,
  brushType,
  canvasColor
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastX, setLastX] = useState(0);
  const [lastY, setLastY] = useState(0);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Установка цвета холста
    ctx.fillStyle = canvasColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, [canvasColor]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Настройки для разных типов кистей
    if (brushType === "solid") {
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.shadowBlur = 0;
    } else if (brushType === "soft") {
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.shadowBlur = brushSize / 2;
      ctx.shadowColor = brushColor;
    } else if (brushType === "smudge") {
      ctx.lineCap = "butt";
      ctx.lineJoin = "round";
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 0.5;
    }
    
    ctx.lineWidth = brushSize;
    ctx.strokeStyle = brushColor;
  }, [brushColor, brushSize, brushType]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    setLastX(e.clientX - rect.left);
    setLastY(e.clientY - rect.top);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();
    
    setLastX(x);
    setLastY(y);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={600}
      className="border border-gray-300 rounded-md cursor-crosshair"
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseOut={stopDrawing}
    />
  );
};

export default DrawingCanvas;
