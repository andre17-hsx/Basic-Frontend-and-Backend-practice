import './App.css';
import Navigation from './components/Navigation';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Show from './components/ShowDatos';

function App() {
  return (
    <Router>
     <Navigation/>
     <Routes>
       <Route path="/datos" element={<Show/>}/>
     </Routes>
    </Router>
  );
}

export const backend = {
  host: "http://localhost",
  port: 8080
}

export default App;
