/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import * as S from "./styled";
import Section from "../../components/Layout/Section";
import { Col, Row } from "../../components/Grid";
import TitlePoints from "../../assets/titlePoints.png";

const content = {
  title: "Mizah Story",
  titleAr: "من هي ميزة",
};

const OurStorySection = ({ lang }) => {
  const [aboutUs, setAboutUs] = useState({});
  const _lang = lang || "en";
  useEffect(() => {
    (async () => {
      const result = await axios.get("/api/v1/aboutus");
      const dev = await axios.get("/api/v1/aboutus");
      try {
        console.log(dev);
      } catch (e) {
        console.log(e);
      }
      setAboutUs(result.data);
    })();
  }, []);

  function youTubeGetID(url) {
    if (!url) return null;
    const videoId = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return videoId[2] !== undefined
      ? videoId[2].split(/[^0-9a-z_\-]/i)[0]
      : videoId[0];
  }

  const videoId = youTubeGetID(aboutUs.video_url);
  const videoIdAr = youTubeGetID(aboutUs.video_url_ar);
  // const videoIdAr = youTubeGetID('https://www.youtube.com/watch?v=TXEA7vwD37k');
  // const videoId = youTubeGetID('https://www.youtube.com/watch?v=7sDalxXRJ1k');

  const tablet = useMediaQuery("(max-width:949px)");
  const mobile = useMediaQuery("(max-width:449px)");
  const videoHeight = mobile ? "150" : tablet ? "200" : "370";
  const videoWidth = mobile ? "300" : tablet ? "450" : "610";
  const opts = {
    height: videoHeight,
    width: videoWidth,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <Section
      bgcolor="#f5ebfe"
      id="our-story"
      customBg
      paddingRight="0"
      paddingLeft="0"
    >
      <Row mrT={6}>
        <Col w={[4, 6, 12]}>
          <S.TitleContainer lang={_lang}>
            <S.TitleSubContainer lang={_lang}>
              <S.TitleImg src={TitlePoints} lang={_lang} />
              <S.Title>
                {lang === "en" ? content.title : content.titleAr}
              </S.Title>
            </S.TitleSubContainer>
          </S.TitleContainer>
        </Col>
      </Row>
      {aboutUs.description && (
        <Row
          mt={4}
          mtT={4}
          mtM={2}
          style={{ flexDirection: _lang === "en" ? "row" : "row-reverse" }}
        >
          <Col w={[4, 5, 6]}>
            <S.Content lang={_lang}>
              {lang === "en" ? aboutUs.description : aboutUs.description_ar}
            </S.Content>
          </Col>
          {/* <Col w={[4, 6, 6]} style={{ display: 'flex', justifyContent: 'center' }}>
            <S.ImageContainer>
              <img src={aboutUs.image_url} alt="our story" style={{ width: '100%' }} />
            </S.ImageContainer>
          </Col> */}
          <Col w={[4, 6, 6]}>
            <div style={{ marginTop: 30 }}>
              <YouTube
                videoId={lang === "en" ? videoId : videoIdAr}
                opts={opts}
              />
            </div>
          </Col>
        </Row>
      )}
      <Row mt={6}>
        <Col w={[4, 3, 4]} mt={0} mtT={4}>
          <S.TextContainer>
            <S.TitleWrapper>
              <S.SubTitle lang={_lang}>
                {_lang === "en" ? "Values" : "قيمنا"}
              </S.SubTitle>
              <S.SubTitleSpan />
            </S.TitleWrapper>
            <S.TextContent lang={_lang}>
              {_lang === "en" ? aboutUs.our_values : aboutUs.our_values_ar}
            </S.TextContent>
          </S.TextContainer>
        </Col>
        <Col w={[4, 3, 4]} mt={0} mtT={4}>
          <S.TextContainer>
            <S.TitleWrapper>
              <S.SubTitle lang={_lang}>
                {_lang === "en" ? "Mission" : "مهمتنا"}
              </S.SubTitle>
              <S.SubTitleSpan />
            </S.TitleWrapper>
            <S.TextContent lang={_lang}>
              {_lang === "en" ? aboutUs.our_mission : aboutUs.our_mission_ar}
            </S.TextContent>
          </S.TextContainer>
        </Col>
        <Col w={[4, 3, 4]} mt={0} mtT={4}>
          <S.TextContainer>
            <S.TitleWrapper>
              <S.SubTitle lang={_lang}>
                {_lang === "en" ? "Vision" : "رؤيتنا"}
              </S.SubTitle>
              <S.SubTitleSpan />
            </S.TitleWrapper>
            <S.TextContent lang={_lang}>
              {_lang === "en" ? aboutUs.our_vision : aboutUs.our_vision_ar}
            </S.TextContent>
          </S.TextContainer>
        </Col>
      </Row>
    </Section>
  );
};

export default OurStorySection;
