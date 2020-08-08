import React from 'react';

// components
import Waves from './components/Waves';
import ActiveWave from './components/SVG/ActiveWave';
import SliderContainer from './components/SliderContainer';
// import SineWave from './components/SineWave';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <SliderContainer />
    </div>
  );
}

export default App;
