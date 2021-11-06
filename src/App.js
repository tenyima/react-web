import './App.css';
import React from 'react';
import Home from './components/Home'
import About from './components/About'
import Register from './components/Register'
import Login from './components/Login'
import Head from './components/Head'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Head />
        <Nav />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
