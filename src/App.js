import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portofolio from './pages/Portofolio';

const App = () => {
    return (
        <div>
            <Router>
                <ScrollToTop />
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/portofolio">
                        <Portofolio />
                    </Route>
                    <Route path="/contact">
                        <Contact />  
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App 