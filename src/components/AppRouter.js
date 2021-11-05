import React from 'react';
import { Switch, Route,Redirect } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import MySkills from './pages/MySkills';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './style.css';

const AppRouter = () => {

    // const location = useLocation()

    return (
        <Switch>

            <Route path='/about' component={About} />
            <Route path='/skills' component={MySkills} />
            <Route path='/contact' component={Contact} />
            <Route path="*" component={Home} />
            <Redirect to='/home' />
        </Switch>
    );
};

export default AppRouter;

