/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

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

// pages
import ProjectPage from './Pages/project';

// test

import './App.css';

function App() {
  const [slide, setSlide] = useState('left');
  const [lang, setLang] = useState('en');
  // this should be false just for testing
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <div id="home">
                <Header lang={lang} setLang={setLang} />
                <SliderContainer slide={slide} setSlide={setSlide} />
                <OurStorySection lang={lang} />
                {/* <OurServicesSection lang={lang} />
                <WhyUsSection lang={lang} />
                <CustomersSection lang={lang} />
                <ProjectsSection lang={lang} />
                <Footer lang={lang} />
                <IconsSection slide={slide} /> */}
              </div>
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
            path="/project/:id"
            exact
            render={() => <ProjectPage lang={lang} setLang={setLang} />}
          />
          <Route
            path="/test"
            exact
            render={() => (
              <>
                {/* <SliderContainer2 lang={lang} slide={slide} setSlide={setSlide} /> */}
                {/* <SliderContainer slide={slide} setSlide={setSlide} /> */}
                {/* <Header lang={lang} setLang={setLang} /> */}
                <OurServicesSection lang={lang} />

                <div style={{ width: '100%', height: '100vh' }} />
                <div style={{ width: '100%', height: '100vh' }} />
              </>
            )}
          />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
