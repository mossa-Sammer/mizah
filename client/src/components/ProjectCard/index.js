import React from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styled';

const ProjectCard = ({ item, lang }) => {
  const history = useHistory();
  return (
    <S.Container
      className="container"
      bg={item.image}
      onClick={() => history.push(`/project/${item.id}`)}
    >
      <S.Overlay className="overlay">
        <S.Items className="items" />
        <S.ItemsHead className="items head">
          <p>{lang === 'en' ? item.title : item.titleAr}</p>
          <hr />
        </S.ItemsHead>
        <S.ItemsCart className="items cart">
          <span>click to go</span>
        </S.ItemsCart>
      </S.Overlay>
    </S.Container>
  );
};

export default ProjectCard;
