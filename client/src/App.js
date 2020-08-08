import React, { useState } from 'react';

// components
import Waves from './components/Waves';
import ActiveWave from './components/SVG/ActiveWave';
import SliderContainer from './components/SliderContainer';
import IconsSection from './components/IconsSection';

import 'antd/dist/antd.css';
import './App.css';

function App() {
  const [slide, setSlide] = useState('left');
  return (
    <div className="App">
      <SliderContainer slide={slide} setSlide={setSlide}/>  
      <section style={{width: '100%', height: '100vh'}}></section>
      <IconsSection slide={slide}/> 
    </div>
  );
}

export default App;
