import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './style';
import Section from '../../components/Layout/Section';
import { Row, Col } from '../../components/Grid';
import Twitter from '../../components/SVG/Twitter';
import Facebook from '../../components/SVG/Facebook';
import Instagram from '../../components/SVG/Instagram';
import GooglePlus from '../../components/SVG/googlePlus';

import Location from './location.png';
import Email from './email.png';

const Footer = ({ lang }) => {
  const [message, setMessage] = useState({});
  const [info, setInfo] = useState({
    instagram_url: '#',
    facebook_url: '#',
    twitter_url: '#',
    google_url: '#',
    address: '',
    whatsapp_no: '',
    website_url: '',
    email: '',
  });
  useEffect(() => {
    (async () => {
      const result = await axios.get('http://localhost/api/v1/setting');
      if (result.data) {
        setInfo(result.data);
      }
    })();
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setMessage((old) => ({ ...old, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // here should send request with the data to the backend;
    await axios.post('/api/v1/message', message);
    setMessage({ name: '', email: '', phoneNo: '', body: '' });
  };
  return (
    <>
      {/* <Section bgimg={FooterBg} bgcolor="footerBg" footer id="footer"> */}
      <Section bgcolor='footerBg' footer id='footer'>
        <S.SocialContainer>
          <S.SocialLink href={info.twitter_url} target='_blank'>
            <Twitter icon='twitter' width='80%' height='80%' color='#755e9e' />
          </S.SocialLink>
          <S.SocialLink href={info.facebook_url} target='_blank'>
            <Facebook
              icon='Facebook'
              width='80%'
              height='80%'
              color='#755e9e'
            />
          </S.SocialLink>
          <S.SocialLink href={info.google_url} target='_blank'>
            <GooglePlus
              icon='GooglePlus'
              width='80%'
              height='80%'
              color='#755e9e'
            />
          </S.SocialLink>
          <S.SocialLink href={info.instagram_url} target='_blank'>
            <Instagram
              icon='Instagram'
              width='80%'
              height='80%'
              color='#755e9e'
            />
          </S.SocialLink>
        </S.SocialContainer>

        <Row jc='flex-start' wrap>
          <Col w={[4, 6, 4]}>
            <S.H5Caps color='#f3c691'>
              {lang === 'en' ? 'send as a message' : 'ارسل لنا رسالة '}{' '}
            </S.H5Caps>
            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
              <S.InputContainer>
                <S.Label lang={lang}>
                  {lang === 'en' ? 'Name' : 'الإسم '}
                  <S.Input
                    type='text'
                    lang={lang}
                    placeholder={
                      lang === 'en' ? 'Enter your name ..' : 'ادخل اسمك '
                    }
                    name='name'
                    value={message.name}
                    onChange={handleChange}
                  />
                </S.Label>
              </S.InputContainer>
              <S.InputContainer>
                <S.Label lang={lang}>
                  {lang === 'en' ? 'Email' : 'الإيميل '}
                  <S.Input
                    type='text'
                    lang={lang}
                    placeholder={
                      lang === 'en'
                        ? 'Enter your email ..'
                        : 'ادحل الايميل الحاص بك'
                    }
                    name='email'
                    value={message.email}
                    onChange={handleChange}
                  />
                </S.Label>
              </S.InputContainer>
              <S.InputContainer>
                <S.Label lang={lang}>
                  {lang === 'en' ? 'Phone No' : 'رقم الموبايل'}
                  <S.Input
                    type='text'
                    lang={lang}
                    placeholder={
                      lang === 'en'
                        ? 'Enter your Phone No ..'
                        : 'ادخل رقم الموبايل'
                    }
                    name='phoneNo'
                    value={message.phoneNo}
                    onChange={handleChange}
                  />
                </S.Label>
              </S.InputContainer>
              <S.InputContainer>
                <S.Label lang={lang}>
                  {lang === 'en' ? 'Message' : 'الرسالة'}
                  <S.TextArea
                    lang={lang}
                    rows='4'
                    type='text'
                    placeholder={
                      lang === 'en'
                        ? 'Enter your message ..'
                        : 'ادخل رسالتك هنا '
                    }
                    name='body'
                    value={message.body}
                    onChange={handleChange}
                  />
                </S.Label>
              </S.InputContainer>
              <S.ColorButton variant='contained' color='primary' type='submit'>
                {lang === 'en' ? 'Submit' : 'إرسال'}
              </S.ColorButton>
            </form>
          </Col>
          <Col w={[4, 0, 4]} />
          <Col w={[4, 6, 4]} mtT={6} mbT={6}>
            <S.H5Caps color='#cea380'>
              {lang === 'en'
                ? 'For Uniqueness Contact Us'
                : 'للتميز تواصل معنا'}
            </S.H5Caps>
            <S.ContactList>
              <S.ListItem>
                <S.LeftSideAddress>
                  <S.ImgContainer>
                    <img
                      src={Location}
                      alt='Location'
                      style={{ width: '70%', height: '70%' }}
                    />
                  </S.ImgContainer>
                </S.LeftSideAddress>
                <S.P16>{info.address}</S.P16>
              </S.ListItem>
              <S.ListItem>
                <S.LeftSideAddress>
                  {/* <S.P16 color="gray4">Whatsapp:</S.P16> */}
                  <S.ImgContainer>
                    <img
                      src='https://i.ibb.co/ypYdKKX/whatsapp.png'
                      alt='Whatsapp'
                      style={{ width: '70%', height: '70%' }}
                    />
                  </S.ImgContainer>
                </S.LeftSideAddress>
                <S.P16 color='gray4'>{info.whatsapp_no}</S.P16>
              </S.ListItem>
              <S.ListItem>
                <S.LeftSideAddress>
                  {/* <S.P16 color="gray4">website:</S.P16> */}
                  <S.ImgContainer>
                    <img
                      src='https://i.ibb.co/rbVxtHr/website.png'
                      alt='Website'
                      style={{ width: '70%', height: '70%' }}
                    />
                  </S.ImgContainer>
                </S.LeftSideAddress>
                <S.P16 color='gray4'>{info.website_url}</S.P16>
              </S.ListItem>
              <S.ListItem>
                <S.LeftSideAddress>
                  {/* <S.P16 color="gray4">Email:</S.P16> */}
                  <S.ImgContainer>
                    <img
                      src={Email}
                      alt='Email'
                      style={{ width: '70%', height: '70%' }}
                    />
                  </S.ImgContainer>
                </S.LeftSideAddress>
                <S.P16>{info.email}</S.P16>
              </S.ListItem>
            </S.ContactList>
          </Col>
        </Row>
      </Section>
      <div
        style={{
          backgroundColor: 'white',
          marginTop: 20,
          paddingTop: 16,
          paddingBottom: 16,
          color: 'white',
        }}
      >
        <S.Caption12 color='#735d9c'>
          All Rights Reserved Mizah Business Development © 2020
        </S.Caption12>
      </div>
    </>
  );
};

export default Footer;
