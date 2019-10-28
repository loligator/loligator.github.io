import React from 'react';
import './App.css';

import CmcdNavBar from './Components/cmcdNavBar';

function App() {
  let images = [];
  return (
    <div className="App">
      <CmcdNavBar/>
      <header className="App-title">
        <h1>
          CONNOR MCDERMOTT
        </h1>
      </header>
      <Gallery images={images}/>
    </div>
  );
}

export default App;
