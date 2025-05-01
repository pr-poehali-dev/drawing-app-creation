
import React from "react";
import Icon from "@/components/ui/Icon";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import ColorPicker from "@/components/ColorPicker";

interface ToolPanelProps {
  brushColor: string;
  setBrushColor: (color: string) => void;
  brushSize: number;
  setBrushSize: (size: number) => void;
  brushType: string;
  setBrushType: (type: string) => void;
  canvasColor: string;
  setCanvasColor: (color: string) => void;
}

const ToolPanel: React.FC<ToolPanelProps> = ({
  brushColor,
  setBrushColor,
  brushSize,
  setBrushSize,
  brushType,
  setBrushType,
  canvasColor,
  setCanvasColor,
}) => {
  const brushTypes = [
    { id: "solid", name: "Твёрдая", icon: "Pen" },
    { id: "soft", name: "Мягкая", icon: "Pencil" },
    { id: "smudge", name: "Размазка", icon: "Eraser" },
  ];

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col gap-4">
      <div>
        <h3 className="text-md font-medium mb-2">Тип кисти</h3>
        <div className="flex gap-2Я планирую создать простой, но функциональный">
          {brushTypes.map((type) => (
             редактор рисования с<Button
              key={type.id}
              variant={brushType === этими шагами:

1. type.id ? "default" : "outline Создам страницу P"}
              onClick={()aintApp с холстом для рис => setBrushType(type.id)}
              className="flexования
2. Добавлю бо items-center gap-1"
            >
              <Icon name={ковую панель с инструментами рtype.icon} size={исования
3. Реализую баз16} />
              овые функции: вы{type.name}
            </Button>бор кисти, ц
          ))}
        </div>
      </div>
      вета и размера
4. Доб
      <div>
        <h3авлю поддержку заг className="text-md font-medium mb-2">Размер кисти: {brushSize}pxрузки изображений как</h3>
        <Slider фона

<pp-write
          value={[brushSize]}
           filepath="src/pages/Pmin={1}
          aintApp.tsx">max={50}
import { useState, useRef
          step={1}
          onValueChange={(value) => setBrushSize } from "react";
import {(value[0])} Button } from "@/components/
          className="w-fullui/button";
import"
        />
      </div> { Slider } from "@/components
      
      <div>
        <h/ui/slider";
import {3 className="text-md font-medium Tabs, TabsContent, Tab mb-2">Цвет кисsList, TabsTrigger } from "@/ти</h3>
        <ColorPcomponents/ui/tabs";
import { Inputicker value={brushColor} onChange } from "@/components/ui/input";={setBrushColor} />
      </div>
      
      <div>
import DrawingCanvas from "@/
        <h3 className="text-mcomponents/DrawingCanvas";
import Icond font-medium mb-2">Цв from "@/components/ui/Iconет холста</h3>
        ";

const PaintApp = () => {
  <ColorPicker value={canvasColor} onChangeconst [brushColor, setBrushColor={setCanvasColor} />
      </div>
    </div>
  );] = useState("#000000");
  const
};

export default ToolPanel;
