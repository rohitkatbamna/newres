import React from 'react';
import './App.css';
import Resumelandingpage from './pages/resumelandingpage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Certificatepage from './pages/certificatespage';
import Projectdetailspage from './pages/projectdetailspage';
import Newsprojectfirst from './components/projectdetailspage/project-news-firstproject/project-news-firstproject';
import Moviesecondproject from './components/projectdetailspage/project-movies-secondproject/movies-second-project';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Resumelandingpage />} exact/>
          <Route path='/certificates' element={<Certificatepage />} />
          <Route path='/projects' element={<Newsprojectfirst />} />
          <Route path='/projects/news' element={<Newsprojectfirst />} />
          <Route path='/projects/movies' element={<Moviesecondproject />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
