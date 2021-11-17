import React from 'react';
import {
    Routes,
    Route
  } from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import MySkills from './pages/MySkills';
import Works from './pages/Works';
import './style.css';

const AppRouter = () => {


    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/skills' element={<MySkills />} />
            <Route path='/works' element={<Works />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="*" element={<Home /> }/>
        </Routes>
    );
};

export default AppRouter;
