import styled from 'styled-components';

export const InfoWrapper = styled.div`
  display: flex;
  padding-top: 24px;
`;

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 80%;
  border-width: 1px;
  border-radius: 5px;
  border-color: gray;
  border-style: dashed;
  background-color: #ddd;
  outline: none;
  transition: border 0.24s ease-in-out;
  cursor: pointer;
  min-height: 145px;

  :focus,
  :active,
  :hover {
    border-color: blue;
  }
`;

export const FileNameWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  width: 100%;
  margin-top: 8px;
`;

export const UploadContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const ThumbsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evely;
  margin-top: 16px
  width: 100%;
`;

export const Thumb = styled.div`
  display: inline-flex;
  margin-bottom: 8px;
  margin-right: 8px;
  padding: 4px;
  justify-content: center;
  width: 80%;
  height: 200px;
  margin: 0 auto;
`;

export const ThumbInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 0;
  width: 100%;
  height: 100%;
  margin-right: 0;
`;

export const ImageWrap = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;
  border-radius: 5px;
  margin-bottom: 16px;
`;

export const StyledImage = styled.img`
  display: block;
  height: auto;
  min-height: 100%;
  width: 100%;
  margin: 0 auto;
`;

export const DeleteBtn = styled.button`
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  align-self: flex-start;
  color: red;
`;

export const FileWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;
