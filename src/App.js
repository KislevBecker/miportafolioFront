import React from 'react';
import './App.css';
// import NavBar from './components/generalComponents/Navbar/navbar';
import About from './components/About/about';
import Portfolio from './components/Portfolio/portfolio'

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <About/>
      <Portfolio/>

    </div>
  );
}

export default App;
