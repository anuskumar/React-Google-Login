import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import './App.css';
import Navbar from './components/Navbar';
import Google from './components/Google';


function App() {

  useEffect(() => {
    // MJS init
    M.AutoInit();
  });

  return (
    <div className="App">
      <Navbar />
      <Google />
    </div>
  );
}

export default App;
