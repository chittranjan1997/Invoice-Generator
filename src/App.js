import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InvoiceGenerator from './Components/InvoiceGenerator';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="">
      </header>
       <InvoiceGenerator /> 
      {/* <Gallery/> */}
    </div>
    );
  }
}

export default App;

