import React from 'react';
import LandingPage from "./landingPage";
import About from './aboutme';
import Resume from "./resume";
import Project from './project';
import Contact from './contact';
import {Switch,Route} from "react-router-dom";

const Main = () => {
    return (
        <div>
       <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route  path="/aboutme" component={About} />
        <Route  path="/contact" component={Contact} />
        <Route  path="/project" component={Project} />
        <Route exact path="/resume" component={Resume} />
        
        </Switch>
        </div>
    );
}
 
export default Main ;