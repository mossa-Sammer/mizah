import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 20%, 53%, 80%, 100% {
  -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  }
  40%, 43% {
  -webkit-transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
  transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
  -webkit-transform: translate3d(0, -10px, 0);
  transform: translate3d(0, -10px, 0);
  }
  70% {
  -webkit-transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
  transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
  -webkit-transform: translate3d(0, -7px, 0);
  transform: translate3d(0, -7px, 0);
  }
  90% { -webkit-transform: translate3d(0,-4px,0); transform: translate3d(0,-4px,0);
  }
  `;

export const HeaderContainer = styled.div`
  width: 100%;
  background: #8369b0;
  position: fixed;
  z-index: 9999;
  display: flex;
  align-items: center;
  flex-direction: ${({ lang }) => (lang === 'en' ? 'row' : 'row-reverse')};
  padding: 10px 0;
`;

export const LogoContainer = styled.div`
  flex: 1;
  height: 50px;
  display: flex;
  justify-content: ${({ lang }) => (lang === 'en' ? 'flex-end' : 'flex-start')};
  margin-right: ${({ lang }) => (lang === 'en' ? ' 40px' : '0px')};
  margin-left: ${({ lang }) => (lang === 'ar' ? ' 40px' : '0px')};
`;

export const Nav = styled.nav`
  flex: 5; // origin 3
  display: flex;
  align-items: center;
  // justify-content: flex-end;
  justify-content: ${({ lang }) => (lang === 'en' ? 'flex-start' : 'flex-end')};
  padding-right: ${({ lang }) => (lang === 'ar' ? ' 40px' : '0px')};
  height: 100%;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: ${({ tablet }) => (tablet ? 'column' : 'row')};
  list-style: none;
  align-items: center;
  margin: 0;
  margin-top: ${({ tablet }) => (tablet ? '-100px' : 0)};
  padding: 0;
  z-index: 9999999;
  position: relative;
`;

export const ListItem = styled.li`
  height: 30px;
  margin-left: 10px;
  margin-top: auto;
  padding: 5px 20px;
  cursor: pointer;
  background:rgba(0,0,0,0.1);
  border-radius: 15px;
  &:hover {
    animation: ${bounce} 0.7s;
  }
`;

export const MenuBtn = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  height: 50px;
  margin-left: 30px;
`;

export const Link = styled.a`
  text-decoration: none;
  font-size: 16px;
  font-weight: bolder;
  font-family: 'Poppins';
  color: #f3c691;
  padding-bottom: 5px;
`;

export const MenuLink = styled.a`
  text-decoration: none;
  font-size: 15px;
  font-weight: bolder;
  font-family: 'Poppins';
  color: #f3c691;
  padding: 5px 20px;
`;

export const Img = styled.img`
  width: 120px;
  height: 120px;
`;

export const ImgContainer = styled.div`
  padding-right: 10px;
  margin-top: -35px;
  // border-right: 2px solid white;
`;

export const Span = styled.span`
  height: 80%;
  width: 3px;
  background-color: white;
  display: black;
  margin: auto 0;
`;

export const Lang = styled.h3`
  font-size: 20px;
  font-weight: 900;
  color: white;
  margin: auto 0;
  padding: 0 15px;
  cursor: pointer;
`;
