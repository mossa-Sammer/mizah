import React from 'react';
import SectionWrapper from './styled';

const Section = ({ children, id, bgcolor, lang, bgimg, addPaddingY }) => {
  return (
    <SectionWrapper id={id} bgcolor={bgcolor} lang={lang} bgimg={bgimg} addPaddingY={addPaddingY}>
      {children}
    </SectionWrapper>
  );
};

export default Section;
