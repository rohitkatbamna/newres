import React from 'react';
import './App.css';
import Resumepagenavbar from './components/resumepage/resumepage-navbar/resumepage-navbar';
import Resumepagemaindetails from './components/resumepage/resumepage-main-details/resumepage-main-details';

function App() {
  return (
    <div>
      <Resumepagenavbar/>
      <Resumepagemaindetails />
    </div>
  );
}

export default App;
