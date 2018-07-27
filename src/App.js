import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import {withRouter} from 'react-router'
// import Post from './components/Post/Post'
// import Form from './components/Form/Form'
// import Dashboard from './components/Dashboard/Dashboard'
// import Auth from './components/Auth/Auth'
import route  from './route'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* {this.props.location.pathname === "/" ? <h1>"You Get Nothing"</h1> :<Nav/>} */}
        <Nav/>
        {route}
      </div>
    );
  }
}

export default App;
