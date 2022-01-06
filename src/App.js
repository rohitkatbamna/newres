import React from 'react';
import './App.css';
import Resumelandingpage from './pages/resumelandingpage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Certificatepage from './pages/certificatespage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Resumelandingpage />} exact/>
          <Route path='/certificates' element={<Certificatepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
