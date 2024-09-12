import Link from 'next/link';
import React from 'react'; 
import '../../src/app/globals.css';

const Home: React.FC = () => {
  return (
    <div className='flex flex-col h-screen justify-center index-div items-center index-div bg-gray-100'>
      <h1 className="text-black text-4xl font-bold mb-8">
        Welcome to College Campus Database
      </h1>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/students" className="text-blue-500 text-2xl hover:underline">
              Students
            </Link>
          </li>
          <li>
            <Link href="/teacher" className="text-blue-500 text-2xl hover:underline">
              Teachers
            </Link>
          </li>
        
        </ul>
      </nav>
    </div>
  );
}

export default Home;
