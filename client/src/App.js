import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// sections
import OurStorySection from './components/OurStorySection';

// components
import SliderContainer from './components/SliderContainer';
import IconsSection from './components/IconsSection';
import Header from './components/Header';
import Login from './components/Login';
import ControlPannel from './components/ControlPannel';
import UploadImage from './components/UploadImage';

import './App.css';

function App() {
  const [slide, setSlide] = useState('left');
  const [lang, setLang] = useState('en');
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <>
                <Header lang={lang} setLang={setLang} />
                <SliderContainer slide={slide} setSlide={setSlide} />
                <section style={{ width: '100%', height: '100vh', backgroundColor: 'gray' }} />
                <OurStorySection />
                <IconsSection slide={slide} />
              </>
            )}
          />
          <Route
            path="/admin"
            exact
            render={() => (
              <>
                <Login />
              </>
            )}
          />
          <Route
            path="/test"
            exact
            render={() => (
              <>
                <ControlPannel />
              </>
            )}
          />
          <Route
            path="/111"
            exact
            render={() => (
              <>
                <UploadImage />
              </>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
