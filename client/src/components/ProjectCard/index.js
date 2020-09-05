import React from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styled';

const ProjectCard = ({ item, lang }) => {
  const history = useHistory();
  return (
    item && item.project_images[0] && item.project_images.image_url ? 
      (<S.Container
      className="container"
      bg={item.project_images[0].image_url}
      onClick={() => history.push(`/project/${item.project_id}`)}
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
    </S.Container>) : <h2>Loading..</h2>
  );
};

export default ProjectCard;
