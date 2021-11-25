import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom";
import home from './pages/home';
import login from './pages/login';
import register from './pages/register';
import profile from './pages/profile';
import editprofile from './pages/editprofile';


function App() {
  return (
    <Router>
    <div className="container">
    <Route path="/" exact component={home} />
    <Route path="/login" exact component={login} />
    <Route path="/register" exact component={register} />
    <Route path="/profile" exact component={profile} />
    <Route path="/editprofile" exact component={editprofile} />
    </div>
    </Router>

  );
}

export default App;
