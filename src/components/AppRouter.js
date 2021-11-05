import React from 'react';
// import { Routes, Route } from 'react-router-dom';
import {
    Routes,
    Route
  } from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import MySkills from './pages/MySkills';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './style.css';

const AppRouter = () => {

    // const location = useLocation()

    return (
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/skills' element={<MySkills />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="*" element={<Home /> }/>
        </Routes>
    );
};

export default AppRouter;

