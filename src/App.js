import logo from './logo.svg';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { Login } from './Login';
import { useState } from 'react';
import { Dashboard } from './Dashboard';
import { AuthProvider } from './context/AuthProvider';

function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </Router>
    </AuthProvider>


  );
}

export default App;
