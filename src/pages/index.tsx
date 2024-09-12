// pages/index.tsx
import '../app/globals.css'; 
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="flex  index-div flex-col g items-center justify-center min-h-screen bg-gray-100 p-8">
        <h1 className='text-[40px] font-bold'>School Management Database</h1>
      <div className="space-y-4">
        <button className="bg-blue-500 mr-5 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out">
          <a href="http://localhost:3000/api/students" className="flex items-center justify-center">
            Students Data
          </a>
        </button>
        <button className="bg-red-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out">
          <a href="http://localhost:3000/api/teachers" className="flex items-center justify-center">
            Teachers Data
          </a>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
