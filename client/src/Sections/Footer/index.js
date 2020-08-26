import React, { useState } from 'react';
import axios from 'axios';
import * as S from './style';
import Section from '../../components/Layout/Section';
import { Row, Col } from '../../components/Grid';
import Twitter from '../../components/SVG/Twitter';
import Facebook from '../../components/SVG/Facebook';
import Instagram from '../../components/SVG/Instagram';
import GooglePlus from '../../components/SVG/googlePlus';

import FooterBg from '../../components/SVG/footer.svg';
import Location from '../../assets/location.png';
import Whatsapp from '../../assets/whatsapp.png';
import Website from '../../assets/website.png';
import Email from '../../assets/email.png';

const Footer = () => {
  const [message, setMessage] = useState({});

  const handleChange = ({ target: { name, value } }) => {
    setMessage(old => ({ ...old, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // here should send request with the data to the backend;
    await axios.post('/api/v1/message', message);
    console.log('footer', message);
    setMessage({ name: '', email: '', phoneNo: '', body: '' });
  };
  return (
    <>
      {/* <Section bgimg={FooterBg} bgcolor="footerBg" footer id="footer"> */}
      <Section bgcolor="footerBg" footer id="footer">
        <S.SocialContainer>
          <S.SocialLink href="#">
            <Twitter icon="twitter" width="80%" height="80%" color="#755e9e" />
          </S.SocialLink>
          <S.SocialLink href="#">
            <Facebook icon="Facebook" width="80%" height="80%" color="#755e9e" />
          </S.SocialLink>
          <S.SocialLink href="#">
            <GooglePlus icon="GooglePlus" width="80%" height="80%" color="#755e9e" />
          </S.SocialLink>
          <S.SocialLink href="#">
            <Instagram icon="Instagram" width="80%" height="80%" color="#755e9e" />
          </S.SocialLink>
        </S.SocialContainer>

        <Row jc="flex-start" wrap>
          <Col w={[4, 6, 4]}>
            <S.H5Caps color="#f3c691">send as a message </S.H5Caps>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <S.InputContainer>
                <S.Label>
                  Name
                  <S.Input
                    type="text"
                    placeholder="Enter your name .."
                    name="name"
                    value={message.name}
                    onChange={handleChange}
                  />
                </S.Label>
              </S.InputContainer>
              <S.InputContainer>
                <S.Label>
                  Email
                  <S.Input
                    type="text"
                    placeholder="Enter your email .."
                    name="email"
                    value={message.email}
                    onChange={handleChange}
                  />
                </S.Label>
              </S.InputContainer>
              <S.InputContainer>
                <S.Label>
                  Phone No
                  <S.Input
                    type="text"
                    placeholder="Enter your Phone No .."
                    name="phoneNo"
                    value={message.phoneNo}
                    onChange={handleChange}
                  />
                </S.Label>
              </S.InputContainer>
              <S.InputContainer>
                <S.Label>
                  Message
                  <S.TextArea
                    rows="4"
                    type="text"
                    placeholder="Enter your message .."
                    name="body"
                    value={message.body}
                    onChange={handleChange}
                  />
                </S.Label>
              </S.InputContainer>
              <S.ColorButton variant="contained" color="primary" type="submit">
                Submit
              </S.ColorButton>
            </form>
          </Col>
          <Col w={[4, 0, 4]} />
          <Col w={[4, 6, 4]} mtT={6} mbT={6}>
            <S.H5Caps color="#cea380">For Uniqueness Contact Us</S.H5Caps>
            <S.ContactList>
              <S.ListItem>
                <S.LeftSideAddress>
                  <S.ImgContainer>
                    <img src={Location} alt="Location" style={{ width: '70%', height: '70%' }} />
                  </S.ImgContainer>
                </S.LeftSideAddress>
                <S.P16>Palestine</S.P16>
              </S.ListItem>
              <S.ListItem>
                <S.LeftSideAddress>
                  {/* <S.P16 color="gray4">Whatsapp:</S.P16> */}
                  <S.ImgContainer>
                    <img src={Whatsapp} alt="Whatsapp" style={{ width: '70%', height: '70%' }} />
                  </S.ImgContainer>
                </S.LeftSideAddress>
                <S.P16 color="gray4">029 2056 6132</S.P16>
              </S.ListItem>
              <S.ListItem>
                <S.LeftSideAddress>
                  {/* <S.P16 color="gray4">website:</S.P16> */}
                  <S.ImgContainer>
                    <img src={Website} alt="Website" style={{ width: '70%', height: '70%' }} />
                  </S.ImgContainer>
                </S.LeftSideAddress>
                <S.P16 color="gray4">www.mizah.com</S.P16>
              </S.ListItem>
              <S.ListItem>
                <S.LeftSideAddress>
                  {/* <S.P16 color="gray4">Email:</S.P16> */}
                  <S.ImgContainer>
                    <img src={Email} alt="Email" style={{ width: '70%', height: '70%' }} />
                  </S.ImgContainer>
                </S.LeftSideAddress>
                <S.P16>hello@wearetempo.org</S.P16>
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
        <S.Caption12 color="#735d9c">
          All Rights Reserved Mizah Business Development © 2020
        </S.Caption12>
      </div>
    </>
  );
};

export default Footer;
