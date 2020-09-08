import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import * as S from './styled';
import { Col, Row } from '../../components/Grid';
import LeftArrow from '../../components/SVG/LeftArrow';
import SectionLayout from '../../components/Layout/SectionLayout';

import ProjectCard from '../../components/ProjectCard';

import Img from '../../assets/ourStory.png';
import Img1 from '../../assets/project1.png';
import Img2 from '../../assets/project2.png';

import TitleIcon from '../../components/SVG/titleIcon';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const ProjectsSection = ({ lang }) => {
  const [data, setData] = useState([]);
  const route = '/api/v1/project';
  useEffect(() => {
    (async () => {
      try {
        console.log('pppppppppppppppppppppppp')
        const data = await axios.get('/api/v1/project');
        console.log(data)
        setData(data.data);

      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  let numberOfItems = 3 <= data.length ? 3 : data.length;
  const tablet = useMediaQuery('(max-width:1140px) and (min-width:650px)');
  const mobile = useMediaQuery('(max-width:650px)');
  if (tablet) {
    numberOfItems = 2;
  }
  if (mobile) {
    numberOfItems = 1;
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: (
      <S.Button type="button" className="button button--text button--icon" aria-label="prev">
        <S.PrevArrow>
          <LeftArrow width="22px" height="22px" to="prev" color="#7e57b1" />
        </S.PrevArrow>
      </S.Button>
    ),
    nextArrow: (
      <S.Button type="button" className="button button--text button--icon" aria-label="next">
        <S.NextArrow>
          <LeftArrow width="22px" height="22px" to="next" color="#7e57b1" />
        </S.NextArrow>
      </S.Button>
    ),
    slidesToShow: numberOfItems,
    slidesToScroll: 1,
  };

  return (
    <>
      <SectionLayout id="our-projects" bgcolor="sectionBackground" addPaddingY>
        <Row>
          <Col w={[4, 6, 12]}>
            <S.TitleContainer lang={lang} style={{ position: 'relative', zIndex: 999 }}>
              <S.TitleSubContainer lang={lang}>
                <TitleIcon />
                <S.Title>{lang === 'en' ? 'Our Projects' : 'مشاريعنا '}</S.Title>
                <TitleIcon />
              </S.TitleSubContainer>
            </S.TitleContainer>
          </Col>
        </Row>
        {!!data.length && (
          <Row jc="center" jcM="flex-end">
            <Col w={[4, 6, 11.5]} mt="30px">
              <S.SliderWrapper>
                <Slider {...settings}>
                  {data.map(elem => elem && <ProjectCard item={elem} lang={lang} />)}
                </Slider>
              </S.SliderWrapper>
            </Col>
          </Row>
        )}
      </SectionLayout>
    </>
  );
};

export default ProjectsSection;
