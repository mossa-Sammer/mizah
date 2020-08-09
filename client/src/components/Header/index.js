import React from 'react';
import * as S from './styled';

import Logo from '../../assets/logo-white.png';

const content = [
  { title: 'home', arTitle: 'الرئيسية', link: '' },
  { title: 'our services', arTitle: 'خدماتنا', link: '' },
  { title: 'why us?', arTitle: 'من نحن ', link: '' },
  { title: 'Customer', arTitle: ' عملاؤنا', link: '' },
  { title: 'review', arTitle: 'قالو عنا', link: '' },
  { title: 'our projects', arTitle: 'آخر مشاريعنا ', link: '' },
  { title: 'for uniquenss contact us', arTitle: 'تواصل معنا', link: '' },
  { title: 'blog', arTitle: 'المدونة', link: '' },
];

const Header = ({ lang, setLang }) => {
  const headerLinks = lang === 'ar' ? [...content].reverse() : content;
  return (
    <S.HeaderContainer lang={lang}>
      <S.Nav lang={lang}>
        <S.List>
          {headerLinks.map(elm => {
            const text = lang === 'en' ? elm.title : elm.arTitle;
            return (
              <S.ListItem>
                <S.Link href="#our-story">{text}</S.Link>
              </S.ListItem>
            );
          })}
        </S.List>
      </S.Nav>
      <S.LogoContainer lang={lang}>
        <S.ImgContainer>
          <S.Img src={Logo} />
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
