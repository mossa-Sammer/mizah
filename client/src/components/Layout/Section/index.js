import React from 'react';

import SectionWrapper from '../SectionLayout/styled';

// initialises smooth-scroll which is used to scroll to in-page links
// used for FAQs and about-us pages in mobile view, e.g. /FAQs#how-tc-work
// offset value is set to overcome navbar height

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]', {
    offset: 30,
  });
}

const Section = ({ children, bgimg, addPaddingY = true, bgcolor, ...props }) => {
  const isGradient = bgcolor && bgcolor.includes('Grad');
  return (
    <SectionWrapper
      bgimg={bgimg}
      bgcolor={bgcolor}
      isGradient={isGradient}
      addPaddingY={addPaddingY}
      {...props}
    >
      {children}
    </SectionWrapper>
  );
};

export default Section;
