import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '../context/ThemeContext';
import './App.css';
import Coding from './components/page/Coding';
import Training from './components/page/Training';
import Navbar from './components/page/Navbar';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Coding />} />
          <Route path="/Training" element={<Training />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
