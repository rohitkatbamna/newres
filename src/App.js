import React from 'react';
import './App.css';
import Resumelandingpage from './pages/resumelandingpage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Educationdetailspage from './pages/educationdetailspage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Resumelandingpage />} exact/>
          <Route path='/education' element={<Educationdetailspage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
