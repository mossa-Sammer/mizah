import React from 'react';

import SectionWrapper from '../SectionLayout/styled';

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
