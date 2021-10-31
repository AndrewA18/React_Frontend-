import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom";
import home from './pages/home';
import login from './pages/login';
import register from './pages/register';



function App() {
  return (
    <Router>
    <div className="container">
    <Route path="/" exact component={home} />
    <Route path="/login" exact component={login} />
    <Route path="/register" exact component={register} />
    </div>
    </Router>

  );
}

export default App;
