import React, { useState } from 'react';

// sections
import OurStorySection from './components/OurStorySection';

// components
import SliderContainer from './components/SliderContainer';
import IconsSection from './components/IconsSection';
import Header from './components/Header';

import 'antd/dist/antd.css';
import './App.css';

function App() {
  const [slide, setSlide] = useState('left');
  const [lang, setLang] = useState('en');
  return (
    <div className="App">
      <Header lang={lang} setLang={setLang} />
      <SliderContainer slide={slide} setSlide={setSlide} />
      <section style={{ width: '100%', height: '100vh', backgroundColor: 'gray' }} />
      <OurStorySection />
      <IconsSection slide={slide} />
    </div>
  );
}

export default App;
