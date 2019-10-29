import React from 'react';
import './App.css';

import CmcdNavBar from './Components/cmcdNavBar';
import Gallery from './Components/Gallery';

import imgDualProcessors from './Image/DualProcessors.png';
import imgMadeInTheShade from './Image/MadeInTheShade.png';

function App() {
  let images = [
    imgDualProcessors,
    imgMadeInTheShade
  ];
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
