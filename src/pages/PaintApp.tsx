
import React, { useState } from 'react';
import DrawingCanvas from '@/components/DrawingCanvas';
import ToolPanel from '@/components/ToolPanel';

const PaintApp: React.FC = () => {
  const [brushType, setBrushType] = useState<string>('pen');
  const [brushSize, setBrushSize] = useState<number>(5);
  const [brushColor, setBrushColor] = useState<string>('#000000');
  const [canvasColor, setCanvasColor] = useState<string>('#ffffff');
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setBackgroundImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex h-screen">
      <ToolPanel 
        brushType={brushType}
        setBrushType={setBrushType}
        brushSize={brushSize}
        setBrushSize={setBrushSize}
        brushColor={brushColor}
        setBrushColor={setBrushColor}
        canvasColor={canvasColor}
        setCanvasColor={setCanvasColor}
        onImageUpload={handleImageUpload}
      />
      <div className="flex-1 p-4 bg-gray-100">
        <DrawingCanvas
          brushType={brushType}
          brushSize={brushSize}
          brushColor={brushColor}
          canvasColor={canvasColor}
          backgroundImage={backgroundImage}
        />
      </div>
    </div>
  );
};

export default PaintApp;
