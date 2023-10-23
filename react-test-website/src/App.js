import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar /> {/* Navbar should be present on all pages/routes */}
      <Routes> {/* Logic for each route */}
        <Route path='/' exact />
        </Routes>
    </Router>
    </>
  );
}

export default App;
