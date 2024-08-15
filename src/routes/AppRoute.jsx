// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Login} from '../components/Login';
import {Home} from '../components/Home';
import {Register} from '../components/Register';

function AppRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes> 
    </Router>
  );
}

export default AppRoute;
