
import React from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/Icon';

interface ToolPanelProps {
  brushType: string;
  setBrushType: (type: string) => void;
  brushSize: number;
  setBrushSize: (size: number) => void;
  brushColor: string;
  setBrushColor: (color: string) => void;
  canvasColor: string;
  setCanvasColor: (color: string) => void;
  onImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ToolPanel: React.FC<ToolPanelProps> = ({
  brushType,
  setBrushType,
  brushSize,
  setBrushSize,
  brushColor,
  setBrushColor,
  canvasColor,
  setCanvasColor,
  onImageUpload
}) => {
  return (
    <div className="w-64 h-full bg-white shadow-md p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Инструменты</h2>
      
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Тип кисти</h3>
        <div className="grid grid-cols-2 gap-2">
          <Button 
            variant={brushType === 'pen' ? 'default' : 'outline'} 
            onClick={() => setBrushType('pen')}
            className="flex flex-col items-center"
          >
            <Icon name="Pen" size={16} />
            <span className="text-xs mt-1">Твердая</span>
          </Button>
          <Button 
            variant={brushType === 'brush' ? 'default' : 'outline'} 
            onClick={() => setBrushType('brush')}
            className="flex flex-col items-center"
          >
            <Icon name="Brush" size={16} />
            <span className="text-xs mt-1">Мягкая</span>
          </Button>
          <Button 
            variant={brushType === 'smudge' ? 'default' : 'outline'} 
            onClick={() => setBrushType('smudge')}
            className="flex flex-col items-center"
          >
            <Icon name="Droplet" size={16} />
            <span className="text-xs mt-1">Размазка</span>
          </Button>
          <Button 
            variant={brushType === 'finger' ? 'default' : 'outline'} 
            onClick={() => setBrushType('finger')}
            className="flex flex-col items-center"
          >
            <Icon name="PointerIcon" fallback="Hand" size={16} />
            <span className="text-xs mt-1">Палец</span>
          </Button>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Размер кисти: {brushSize}px</h3>
        <Slider
          value={[brushSize]}
          min={1}
          max={50}
          step={1}
          onValueChange={(value) => setBrushSize(value[0])}
          className="mb-2"
        />
      </div>
      
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Цвет кисти</h3>
        <input
          type="color"
          value={brushColor}
          onChange={(e) => setBrushColor(e.target.value)}
          className="w-full h-10 cursor-pointer rounded"
        />
      </div>
      
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Цвет холста</h3>
        <input
          type="color"
          value={canvasColor}
          onChange={(e) => setCanvasColor(e.target.value)}
          className="w-full h-10 cursor-pointer rounded"
        />
      </div>
      
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Загрузить фото</h3>
        <div className="flex items-center">
          <label className="flex-1">
            <div className="btn btn-outline w-full text-center py-2 px-4 rounded cursor-pointer border border-gray-300 hover:bg-gray-50">
              Выбрать файл
            </div>
            <input 
              type="file" 
              accept="image/*" 
              onChange={onImageUpload} 
              className="hidden" 
            />
          </label>
        </div>
      </div>
      
      <Button className="w-full" variant="default">
        Сохранить рисунок
      </Button>
    </div>
  );
};

export default ToolPanel;
