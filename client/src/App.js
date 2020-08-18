/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// sections
import OurStorySection from './Sections/OurStorySection';
import OurServicesSection from './Sections/OurServicesSection';
import WhyUsSection from './Sections/WhyUsSection';

// components
import SliderContainer from './components/SliderContainer';
import IconsSection from './components/IconsSection';
import Header from './components/Header';
import Login from './components/Login';
import ControlPannel from './components/ControlPannel';
import CustomersSection from './Sections/CustomersSection';
import ProjectsSection from './Sections/ProjectsSection';
import Footer from './Sections/Footer';

// test

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
                <OurStorySection lang={lang} />
                <OurServicesSection lang={lang} />
                <WhyUsSection lang={lang} />
                <CustomersSection lang={lang} />
                <ProjectsSection lang={lang} />
                <Footer lang={lang} />
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
            path="/test"
            exact
            render={() => (
              <>
                {/* <SliderContainer2 lang={lang} slide={slide} setSlide={setSlide} /> */}
                <OurStorySection lang={lang} setLang={setLang} />

                <div style={{ width: '100%', height: '100vh' }} />
              </>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
