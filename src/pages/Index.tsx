
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/Icon";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-black">Онлайн Рисовалка</h1>
        <p className="text-xl text-gray-600 mb-8">Создавайте удивительные рисунки прямо в браузере!</p>
        
        <Link to="/paint">
          <Button className="text-lg px-8 py-6" size="lg">
            <Icon name="Paintbrush" size={20} />
            Начать рисовать
          </Button>
        </Link>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-3 text-blue-500 flex justify-center">
              <Icon name="Palette" size={36} />
            </div>
            <h3 className="font-bold text-lg mb-2">Миллионы цветов</h3>
            <p className="text-gray-600">Выбирайте из огромной палитры или создавайте собственные оттенки</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-3 text-purple-500 flex justify-center">
              <Icon name="Brush" size={36} />
            </div>
            <h3 className="font-bold text-lg mb-2">Разные кисти</h3>
            <p className="text-gray-600">Твёрдые, мягкие, размазка и многие другие инструменты</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-3 text-green-500 flex justify-center">
              <Icon name="Image" size={36} />
            </div>
            <h3 className="font-bold text-lg mb-2">Загрузка изображений</h3>
            <p className="text-gray-600">Загружайте свои фото и рисуйте поверх них</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
