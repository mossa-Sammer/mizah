import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import * as S from "./styled";
import { Col, Row } from "../../components/Grid";
import SectionLayout from "../../components/Layout/SectionLayout";

import CustomerCard from "../../components/CustomerCard";
import TitlePoints from "../../assets/titlePoints.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClintsSection = ({ lang }) => {
  const [data, setData] = useState([]);
  const [numberOfItems, setNumberOfItems] = useState(3);

  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get("http://localhost:5000/api/v1/customer");
        setData(data.data);
        if (numberOfItems > data.data.length) {
          setNumberOfItems(data.data.length);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const tablet = useMediaQuery("(max-width:1140px) and (min-width:650px)");
  const mobile = useMediaQuery("(max-width:650px)");
  if (tablet) {
    if (numberOfItems !== 2) {
      setNumberOfItems(2);
    }
  }
  if (mobile) {
    if (numberOfItems !== 1) {
      setNumberOfItems(1);
    }
  }
  const settings = {
    speed: 500,
    slidesToShow: numberOfItems,
    slidesToScroll: 1,
  };

  return (
    <>
      <SectionLayout id="our-customers" bgcolor="sectionBackground" addPaddingY>
        <Row>
          <Col w={[4, 6, 12]}>
            <S.TitleContainer
              lang={lang}
              style={{ position: "relative", zIndex: 999 }}
            >
              <S.TitleSubContainer lang={lang}>
                <S.TitleImg src={TitlePoints} lang={lang} />
                <S.Title>
                  {lang === "en" ? "Clients Who Trust Us" : "عملاءنا "}
                </S.Title>
              </S.TitleSubContainer>
            </S.TitleContainer>
          </Col>
        </Row>
        {!!data.length && (
          <Row jc="center" jcM="flex-end">
            <Col w={[4, 6, 11.5]} mt="30px">
              <S.SliderWrapper>
                <Slider {...settings}>
                  {data.map((elem) => (
                    <CustomerCard item={elem} lang={lang} />
                  ))}
                </Slider>
              </S.SliderWrapper>
            </Col>
          </Row>
        )}
      </SectionLayout>
    </>
  );
};

export default ClintsSection;
