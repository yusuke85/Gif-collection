import React from "react";
import './App.css';
import ListOfGif from "./component/ListOfGif";

import {  Link, Route } from "wouter";



function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>Yusuke GIF file</h1>
        <Link to='/gif/skateboard'>🛹</Link>
        <Link to='/gif/dog'>🐕</Link>
        <Link to='/gif/Simpsons'>🍩</Link>
        <Route 
        component={ListOfGif}
        path="/gif/:keyword"  />

      </section>
    </div>
  );
}

export default App;


