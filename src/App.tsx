import React, { Component } from 'react';
import { Link,BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Docs from './components/Docs';
import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home}/>
        <Route path={`${process.env.PUBLIC_URL}/home`} component={Home}/>      
        <Route path={`${process.env.PUBLIC_URL}/about`} component={About}/>
        <Route path={`${process.env.PUBLIC_URL}/docs`} component={Docs}/>
        {/* <Redirect to="/" /> */}
      </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
