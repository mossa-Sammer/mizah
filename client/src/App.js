/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// sections
import OurStorySection from './components/OurStorySection';
import OurServicesSection from './components/OurServicesSection';

// components
import SliderContainer from './components/SliderContainer';
import IconsSection from './components/IconsSection';
import Header from './components/Header';
import Login from './components/Login';
import ControlPannel from './components/ControlPannel';

import './App.css';

function App() {
  const [slide, setSlide] = useState('left');
  const [lang, setLang] = useState('en');
  const [isAuth, setIsAuth] = useState(false);

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
                <OurStorySection lang={lang} />
                <OurServicesSection lang={lang} />
                <IconsSection slide={slide} />
              </>
            )}
          />
          <Route
            path="/admin"
            exact
            render={() => <Login isAuth={isAuth} setIsAuth={setIsAuth} />}
          />
          <Route
            path="/control-panel"
            exact
            render={() =>
              isAuth ? (
                <ControlPannel setIsAuth={setIsAuth} />
              ) : (
                <h1>"You need permission to access this site".. try to login agin </h1>
              )
            }
          />
          <Route
            path="/111"
            exact
            render={() => (
              <>
                <OurServicesSection />
              </>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
