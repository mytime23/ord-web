import React, { Component } from 'react';
import { Link,BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Docs from './components/Docs';
import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/home' component={Home}/>      
        <Route path='/about' component={About}/>
        <Route path='/docs' component={Docs}/>
        {/* <Redirect to="/" /> */}
      </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
