import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Education from './components/Qualification/Education';
import Skill from './components/Skills/Skill';
import Project from './components/Projects/Project';
import Contact from './components/Contact/Contact';
import './App.css';
import ScrollToTop from './ScrollToTop';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      darkMode: false,
      mode: false
    }
  }

  toggleMode = () => {
    this.setState({
      darkMode: !this.state.darkMode,
      mode: !this.state.mode
    });
  }
  render() {
    const { darkMode, mode } = this.state;
    const modeChange = mode ? 'LightMode' : 'DarkMode'
    return (
      <>
        <div className={darkMode ? "dark-mode" : "light_mode"}>
          <ScrollToTop />
          <Router>
            <Switch>
              <Route exact path="/" component={() => (<Home handleClick={this.toggleMode} modeChange={modeChange} />)} />
              <Route path="/about" component={() => (<About handleClick={this.toggleMode} modeChange={modeChange} />)} />
              <Route path="/qualification" component={() => (<Education handleClick={this.toggleMode} modeChange={modeChange} />)} />
              <Route path="/skill" component={() => (<Skill handleClick={this.toggleMode} modeChange={modeChange} />)} />
              <Route path="/project" component={() => (<Project handleClick={this.toggleMode} modeChange={modeChange} />)} />
              <Route path="/contact" component={() => (<Contact handleClick={this.toggleMode} modeChange={modeChange} />)} />
            </Switch>
          </Router>
        </div>
      </>
    )
  }
}

export default App;
