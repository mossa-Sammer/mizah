/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import YouTube from 'react-youtube';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import * as S from './styled';
import ProjectHeaderBg from '../../assets/blog.png';
import Header from '../../components/Header';

import TitleIcon from '../../components/SVG/titleIcon';
import Section from '../../components/Layout/Section';
import Footer from '../../Sections/Footer';
import { Col, Row } from '../../components/Grid';

const ProjectPage = ({ lang, setLang }) => {
  const [projectData, setProjectData] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  const history = useHistory();
  const id = history.location.pathname.split('/')[2];
  useEffect(() => {
    (async () => {
      if (id) {
        const result = await axios.get(`/api/v1/project/${id}`);
        setProjectData(result.data);
      }
    })();
  }, []);

  function youTubeGetID(url) {
    const videoId = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return videoId[2] !== undefined ? videoId[2].split(/[^0-9a-z_\-]/i)[0] : videoId[0];
  }

  const videoId = projectData && projectData.video_url && youTubeGetID(projectData.video_url);
  const tablet = useMediaQuery('(max-width:949px)');
  const mobile = useMediaQuery('(max-width:449px)');
  const videoHeight = mobile ? '150' : tablet ? '200' : '390';
  const videoWidth = mobile ? '300' : tablet ? '450' : '640';
  const opts = {
    height: videoHeight,
    width: videoWidth,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <>
      <Header lang={lang} setLang={setLang} />
      <S.ProjectHeader bg={ProjectHeaderBg}>
        <S.TitleContainer>
          <S.TitleSubContainer lang={lang}>
            <TitleIcon />
            <S.Title>{lang === 'en' ? projectData.title : projectData.title_ar}</S.Title>
            <TitleIcon />
          </S.TitleSubContainer>
        </S.TitleContainer>
      </S.ProjectHeader>
      <Section>
        <Row jc={lang === 'en' ? 'flex-start' : 'flex-end'} style={{ marginTop: 250 }}>
          <Col w={[4, 6, 6]}>
            <S.SectionTitle lang={lang}>
              <h1 style={{ marginLeft: 15 }}>
                {lang === 'en' ? projectData.title : projectData.title_ar}
              </h1>
            </S.SectionTitle>
            <S.TextContainer>
              <S.Text lang={lang}>
                {lang === 'en' ? projectData.description : projectData.description_ar}
              </S.Text>
            </S.TextContainer>
          </Col>
          <Col
            style={{ display: 'flex', alignItems: 'flex-end', flexDirection: 'column' }}
            w={[4, 6, 6]}
          >
            <S.ShowImage
              bg={
                projectData &&
                projectData.project_image &&
                projectData.project_image[activeIndex].image_url
              }
            />
            <S.ImagesContainer>
              {projectData &&
                projectData.project_image &&
                projectData.project_image.map((elm, i) =>
                  i === activeIndex ? (
                    <S.ImageContainer onClick={() => setActiveIndex(i)}>
                      <S.SingleImage active bg={elm.image_url} />
                    </S.ImageContainer>
                  ) : (
                    <S.ImageContainer onClick={() => setActiveIndex(i)}>
                      <S.SingleImage bg={elm.image_url} />
                    </S.ImageContainer>
                  )
                )}
            </S.ImagesContainer>
          </Col>
        </Row>
        {videoId && (
          <Row>
            <Col w={[4, 6, 12]}>
              <div style={{ marginTop: 30 }}>
                <YouTube videoId={videoId} opts={opts} />
              </div>
            </Col>
          </Row>
        )}
      </Section>
      <Footer lang={lang} />
    </>
  );
};

export default ProjectPage;
