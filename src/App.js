import React from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from "reactstrap";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="https://www.linkedin.com/in/anil-bandari-5bba3a179/" target="_blank">Anil Bandari</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
