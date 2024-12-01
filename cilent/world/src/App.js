import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Receipe from './subroutes/receipe';
import Home from './receipe/home/home';
import Navigation from './receipe/navbar/navbar';
import ViewReceipe from './viewReceipe/viewReceipe';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/receipe" element={<Receipe/>} />
        <Route path='/viewReceipe/:id' element={<ViewReceipe/>}/>
      </Routes>
    </Router>
  );
}

export default App;
