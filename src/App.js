import React from 'react';
import './App.css';
import Resumelandingpage from './pages/resumelandingpage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Resumelandingpage />} exact/>
          <Route path='/certificates' element={<} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
