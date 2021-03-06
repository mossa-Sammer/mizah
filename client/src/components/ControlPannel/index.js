/* eslint-disable consistent-return */
import React, { useState } from 'react';

import SideMenu from './SideMenu';
import Header from './Header';
import {
  Settings,
  Slider,
  AboutUs,
  Testimonials,
  Projects,
  Customers,
  Features,
  Blog,
  ContactEmails,
  Services,
} from './TabsComponents';

const ControlPannel = ({ setIsAuth }) => {
  const [currentTab, setCurrentTab] = useState('settings');
  // const [isFormOpen, setIsFormOpen] = useState(false);
  const renderPage = () => {
    switch (currentTab) {
      case 'slider':
        return <Slider />;
      case 'settings':
        return <Settings />;
      case 'aboutUs':
        return <AboutUs />;
      case 'testimonials':
        return <Testimonials />;
      case 'projects':
        return <Projects />;
      case 'customers':
        return <Customers />;
      case 'features':
        return <Features />;
      case 'blog':
        return <Blog />;
      case 'contactEmails':
        return <ContactEmails />;
      case 'services':
        return <Services />;
      default:
        break;
    }
  };
  return (
    <div style={{ height: '100%', minHeight: '100vh' }}>
      <SideMenu setCurrentTab={setCurrentTab} />
      <Header setIsAuth={setIsAuth} />
      {renderPage()}
    </div>
  );
};

export default ControlPannel;
