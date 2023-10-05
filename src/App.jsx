import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "./components/Header.jsx";
import './App.css';

function App() {

  return (
    <>
     <Header />
      <div id="details">
        <Outlet />
      </div>
    </>
  )
}

export default App
