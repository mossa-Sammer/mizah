/* eslint-disable import/no-useless-path-segments */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Collapse from '@material-ui/core/Collapse';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import * as S from './styled';

import Menu from '../SVG/Menu';
import Close from '../SVG/Close';

const content = [
  { title: 'home', arTitle: 'الرئيسية', link: '#home' },
  { title: 'our services', arTitle: 'خدماتنا', link: '#our-services' },
  { title: 'why us?', arTitle: 'من نحن ', link: '#why-us' },
  { title: 'Customers', arTitle: ' عملاؤنا', link: '#our-people' },
  { title: 'review', arTitle: 'قالو عنا', link: '#our-customers' },
  { title: 'our projects', arTitle: 'آخر مشاريعنا ', link: '#our-projects' },
  { title: 'for uniquenss contact us', arTitle: 'تواصل معنا', link: '#footer' },
  // { title: 'blog', arTitle: 'المدونة', link: '#blog' },
];

const Header = ({ lang, setLang }) => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const tablet = useMediaQuery('(max-width:1150px)');
  const headerLinks = lang === 'ar' ? [...content].reverse() : content;
  const handleClick = () => {
    if (history.location.pathname !== '/') {
      history.push('/');
    }
    setIsOpen(o => !o);
  };
  return tablet ? (
    <>
      <S.HeaderContainer lang={lang}>
        <S.Nav lang={lang}>
          <S.MenuBtn type="button" onClick={handleClick}>
            {isOpen ? <Close color="white" /> : <Menu color="white" />}
          </S.MenuBtn>
        </S.Nav>
        <S.LogoContainer lang={lang}>
          <S.ImgContainer>
            <S.Img src='https://i.ibb.co/M9MP3Yw/logo-white.png' />
          </S.ImgContainer>
          <S.Span />
          <S.Lang onClick={() => setLang(old => (old === 'en' ? 'ar' : 'en'))}>
            {lang === 'en' ? 'AR' : 'ENG'}
          </S.Lang>
        </S.LogoContainer>
      </S.HeaderContainer>
      <div
        style={{
          position: 'fixed',
          top: 70,
          width: '100%',
          zIndex: 99999,
          background: 'black',
        }}
      >
        <Collapse in={isOpen}>
          <div
            style={{
              width: '100%',
              height: '100vh',
              backgroundColor: '#000',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <S.List tablet>
              {content.map(elm => {
                const text = lang === 'en' ? elm.title : elm.arTitle;
                return (
                  <S.ListItem>
                    <S.MenuLink href={elm.link} onClick={handleClick}>
                      {text}
                    </S.MenuLink>
                  </S.ListItem>
                );
              })}
            </S.List>
          </div>
        </Collapse>
      </div>
    </>
  ) : (
    <S.HeaderContainer lang={lang}>
      <S.Nav lang={lang}>
        <S.List>
          {headerLinks.map(elm => {
            const text = lang === 'en' ? elm.title : elm.arTitle;
            return (
              <S.ListItem>
                <S.Link href={elm.link} onClick={handleClick}>
                  {text}
                </S.Link>
              </S.ListItem>
            );
          })}
        </S.List>
      </S.Nav>
      <S.LogoContainer lang={lang}>
        <S.ImgContainer>
          <S.Img src="https://i.ibb.co/M9MP3Yw/logo-white.png" />
        </S.ImgContainer>
        <S.Span />
        <S.Lang onClick={() => setLang(old => (old === 'en' ? 'ar' : 'en'))}>
          {lang === 'en' ? 'AR' : 'ENG'}
        </S.Lang>
      </S.LogoContainer>
    </S.HeaderContainer>
  );
};

export default Header;
