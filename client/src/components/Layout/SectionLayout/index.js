import React from 'react';
import SectionWrapper from './styled';

const Section = ({ children, id, bgcolor, lang, bgimg, addPaddingY, paddingRight, paddingLeft }) => {
  return (
    <SectionWrapper id={id} bgcolor={bgcolor} lang={lang} bgimg={bgimg} addPaddingY={addPaddingY} paddingRight={paddingRight} paddingLeft={paddingLeft}>
      {children}
    </SectionWrapper>
  );
};

export default Section;
