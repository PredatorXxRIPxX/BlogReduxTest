import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Post from './view/post';
import Home from './view/Home';

function App() {
  return (
    <>
      <nav className='w-full h-11 bg-gray-900 text-white font-bold flex justify-between items-center'>
        <h1 className='m-4'>Redux Blog</h1>
        <div className='flex items-center justify-between p-4 m-10'>
          <h2 className='p-4 cursor-pointer'><Link to={'/'}>Home</Link></h2>
          <h2 className='p-4 cursor-pointer'><Link to={'/posts'}>Posts</Link></h2>
        </div>
      </nav>
      <div className='h-full w-full flex flex-col items-center p-4'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/posts' element={<Post/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
