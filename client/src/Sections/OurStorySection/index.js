/* eslint-disable no-underscore-dangle */
import React from 'react';
import * as S from './styled';
import OurStoryImg from '../../assets/ourStory.png';
import TitleIcon from '../../components/SVG/titleIcon';
import Section from '../../components/Layout/Section';
import { Col, Row } from '../../components/Grid';

const content = {
  title: 'OUR STORY',
  description:
    'Mizah Marketing and Business Development Company is the marketing arm of the Public Establishment for Industrial Estates, Madayn. It was established in 2019 as a result of the partnership ... ~ The company was established to promote and attract investments in the industrial and business sectors, in addition to providing marketing and business development services to manufacturing and trading companies in the Sultanate, in line with international standard practices. Our team is focused on helping companies make strategic advancements in the expression of novel ideas and innovations in the market. We are the key destination for a bright and promising presence in the business community. At Mizah, we aspire to build true, seamless, and dedicated partnerships.Because everything has a feature that makes it different, Mizah that helps you show your distinction',
  titleAr: 'من هي ميزة',
  descriptionAr:
    'شركة ميزه للتسويق وتطوير الأعمال . تأسست في عام 2019 تأسست الشركة لتشجيع وجذب الاستثمارات في قطاعي الصناعة والأعمال، بالإضافة إلى تقديم خدمات التسويق وتطوير الأعمال لشركات التصنيع والتجارة في ، بما يتماشى مع المقاييس والمعايير الدولية. يركز فريقنا على مساعدة الشركات على تحقيق تقدم استراتيجي في التعبير عن الأفكار والابتكارات الجديدة في السوق. نحن الوجهة الرئيسية لحضور مشرق وواعد في مجتمع الأعمال. في ميزة، نطمح إلى بناء شراكات حقيقية وسلسة ومخصصة.',
};

const OurStorySection = ({ lang }) => {
  const _lang = lang || 'en';
  return (
    <Section bgcolor="#f5ebfe" id="our-story" customBg>
      <Row mrT={6}>
        <Col w={[4, 5, 12]}>
          <S.TitleContainer lang={_lang}>
            <S.TitleSubContainer lang={_lang}>
              <TitleIcon />
              <S.Title>{lang === 'en' ? content.title : content.titleAr}</S.Title>
            </S.TitleSubContainer>
          </S.TitleContainer>
        </Col>
      </Row>
      <Row mt={4} mtT={4} mtM={2}>
        <Col w={[4, 5, 12]}>
          <S.Content lang={_lang}>
            {lang === 'en' ? content.description : content.descriptionAr}
          </S.Content>
        </Col>
        <Col w={[4, 6, 12]} style={{ display: 'flex', justifyContent: 'center' }}>
          <S.ImageContainer>
            <img src={OurStoryImg} alt="our story" style={{ width: '100%' }} />
          </S.ImageContainer>
        </Col>
      </Row>
    </Section>
  );
};

export default OurStorySection;
