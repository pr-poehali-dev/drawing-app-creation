
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/Icon';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Художественная студия</h1>
          <p className="text-xl text-gray-600 mb-8">
            Рисуйте с помощью различных кистей, создавайте шедевры и редактируйте фотографии
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="text-purple-600 mb-3">
                <Icon name="Brush" size={36} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Множество кистей</h3>
              <p className="text-gray-600">Твёрдые, мягкие кисти и другие инструменты</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-blue-600 mb-3">
                <Icon name="Palette" fallback="Circle" size={36} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Миллиарды цветов</h3>
              <p className="text-gray-600">Выбирайте из неограниченной палитры цветов</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="text-green-600 mb-3">
                <Icon name="Image" size={36} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Редактирование фото</h3>
              <p className="text-gray-600">Загружайте и рисуйте поверх ваших фотографий</p>
            </div>
          </div>
          
          <Link to="/paint">
            <Button className="px-8 py-6 text-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all">
              <Icon name="Paintbrush" fallback="Pencil" size={20} className="mr-2" />
              Начать рисовать
            </Button>
          </Link>
        </div>
      </div>
      
      <footer className="mt-8 text-center text-gray-600">
        <p>© 2025 Художественная студия. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default Index;
