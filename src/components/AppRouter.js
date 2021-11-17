import React from 'react';
import {
    Routes,
    Route
  } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import MySkills from './pages/MySkills';
import Works from './pages/Works';
import './style.css';
import ContactMe from './pages/ContactMe';

const AppRouter = () => {


    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/skills' element={<MySkills />} />
            <Route path='/works' element={<Works />} />
            <Route path='/contactMe' element={<ContactMe />} />
            <Route path="*" element={<Home /> }/>
        </Routes>
    );
};

export default AppRouter;
