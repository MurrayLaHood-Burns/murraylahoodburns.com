import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import NavLink from './components/NavLink';
import { Nav } from './components/nav';
import { colors } from './components/common';


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Nav
            barWidth={250}
            header={
              <h3 style={{margin:0}}>Murray LaHood-Burns</h3>
            }
            color='white'
            backgroundColor={colors.blue}
            links={
              <div>
                <NavLink 
                  to={'/'} 
                  faIcon='home'
                >Home</NavLink>
                <NavLink 
                  to={'/experience'} 
                  faIcon='briefcase'
                >Experience</NavLink>
                <NavLink 
                  to={'/education'} 
                  faIcon='graduation-cap'
                >Education</NavLink>
                <NavLink 
                  to={'/projects'} 
                  faIcon='code'
                >Projects</NavLink>
                <NavLink 
                  to={'/aboutme'} 
                  faIcon='user'
                >About Me</NavLink>
              </div>
            }
          >
            <Route exact path='/' component={Home} />
            <Route exact path='/experience' component={Experience} />
            <Route exact path='/education' component={Education} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/aboutme' component={AboutMe} />
          </Nav>
        </div>
      </Router>
    );
  }
}

export default App;
