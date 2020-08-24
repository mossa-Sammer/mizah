import React, { useState } from 'react';
import * as S from './styled';
import ProjectHeaderBg from '../../assets/blog.png';
import I1 from '../../assets/icon1.png';
import I2 from '../../assets/icon2.png';
import I3 from '../../assets/icon3.png';
import I4 from '../../assets/icon4.png';
import I5 from '../../assets/icon5.png';

import TitleIcon from '../../components/SVG/titleIcon';
import Section from '../../components/Layout/Section';
import Footer from '../../Sections/Footer';
import { Col, Row } from '../../components/Grid';

const ProjectPage = ({ lang }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const data = {
    title: 'Social Media Management For Mubadrah Company',
    titleAr: 'اداره حسابات التواصل الأجتماعي لشركة مبادرة',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially ",
    contentAr:
      'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي',
    images: [ProjectHeaderBg, I1, I2, I3, I4, I5],
  };
  return (
    <>
      <S.ProjectHeader bg={ProjectHeaderBg}>
        <S.TitleContainer>
          <S.TitleSubContainer lang={lang}>
            <TitleIcon />
            <S.Title>{lang === 'en' ? data.title : data.titleAr}</S.Title>
            <TitleIcon />
          </S.TitleSubContainer>
        </S.TitleContainer>
      </S.ProjectHeader>
      <Section>
        <Row jc={lang === 'en' ? 'flex-start' : 'flex-end'} style={{ marginTop: 250 }}>
          <Col w={[4, 6, 6]}>
            <S.SectionTitle lang={lang}>
              <h1 style={{ marginLeft: 15 }}>{lang === 'en' ? data.title : data.titleAr}</h1>
            </S.SectionTitle>
            <S.TextContainer>
              <S.Text lang={lang}>{lang === 'en' ? data.content : data.contentAr}</S.Text>
            </S.TextContainer>
          </Col>
          <Col
            style={{ display: 'flex', alignItems: 'flex-end', flexDirection: 'column' }}
            w={[4, 6, 6]}
          >
            <S.ShowImage bg={data.images[activeIndex]} />
            <S.ImagesContainer>
              {data.images.map((elm, i) =>
                i === activeIndex ? (
                  <S.ImageContainer onClick={() => setActiveIndex(i)}>
                    <S.SingleImage active bg={elm} />
                  </S.ImageContainer>
                ) : (
                  <S.ImageContainer onClick={() => setActiveIndex(i)}>
                    <S.SingleImage bg={elm} />
                  </S.ImageContainer>
                )
              )}
            </S.ImagesContainer>
          </Col>
        </Row>
        <Row>
          <Col w={[4, 6, 12]}>
            <h3>video placeholder</h3>
          </Col>
        </Row>
      </Section>
      <Footer lang={lang} />
    </>
  );
};

export default ProjectPage;
