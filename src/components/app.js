import React, { Component } from 'react';
import moment from "moment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/Blog";
import PortfolioDetail from "./portfolio/portfolio-detail";
import NoMatch from "./pages/no-match";


// all components are going to be nested under the parent component here
// component imports need to be capitolized!!!

//jsx for display is going to go below
export default class App extends Component {
  render() {
    return (                                    
      <div className='app'>
        <Router>
          <div>
            
            <h1>Josh Maurer's Portfolio</h1>
       
            <div>
              {moment().format('MMMM Do YYYY, h:mm:ss a')}
            </div>
            
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
              <Route path="/Contact" component={Contact} />
              <Route path="/Blog" component={Blog} />
              <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
              
              <Route component={NoMatch} />
            </Switch>
            
          </div>
        </Router>
      </div>

    );
  }
}
