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
  width: 300px;
  border-width: 1px;
  border-radius: 5px;
  border-color: gray;
  border-style: dashed;
  background-color: #ddd;
  outline: none;
  transition: border 0.24s ease-in-out;
  cursor: pointer;
  min-height: 42px;
  transition: all .3s;

  :focus,
  :active,
  :hover {
    border-color: blue;
    background-color: #eee;
    transition: all .3s;
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
  width: 80%;
  padding-left: 100px;
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
  width: 100%;
`;

export const ThumbInner = styled.div`
  display: flex;
  align-items: center;
  min-width: 0;
  width: 100%;
  height: 100%;
  margin-right: 0;
  border: 1px solid #eee;
  border-radius: 5px;
`;

export const ImageWrap = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 5px;
  margin-right: 16px;
`;

export const StyledImage = styled.img`
  display: block;
  height: 128px;
  width: 128px;
  padding: 10px;
  object-fit: contain;
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

export const ActionButtons = styled.div`
  display: flex;
  align-self: center;
  margin: 0 15px;
`