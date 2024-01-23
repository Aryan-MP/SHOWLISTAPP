import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowList from './components/ShowList/ShowList';
import ShowDetails from './components/ShowDetails/ShowDetails';
import './App.css'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/details/:id" element={<ShowDetails />} />
        <Route path="/" element={<ShowList />} />
      </Routes>
    </Router>
  );
}

export default App;
