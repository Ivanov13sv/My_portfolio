import React from 'react';
import { Switch, Route} from 'react-router-dom';
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
            {/* <TransitionGroup>
                <CSSTransition
                    timeout={300}
                    classNames='fadeLeft'
                    key={location.key}>
                    <Switch location={location}>
                        <Route path='/home'><Home /></Route>
                        <Route path='/about'><About /></Route>
                        <Route path='/skills'><MySkills /></Route>
                        <Route path='/contact'><Contact /></Route>
                        <Route path='/portfolio'><Contact /></Route>
                    </Switch>
                </CSSTransition>
            </TransitionGroup> */}

            <Route path='/about' component={About} />
            <Route path='/skills' component={MySkills} />
            <Route path='/contact' component={Contact} />
            <Route path="*" component={Home} />
        </Switch>
    );
};

export default AppRouter;
