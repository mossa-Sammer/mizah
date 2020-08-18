import styled from '@emotion/styled';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import theme from '../../utils/theme';

export const List = styled.ul`
  list-style: none;
  li {
    margin-top: 8px;
  }
`;

export const ContactList = styled(List)`
  li {
    margin-top: 20px;
  }
`;
export const ContactListValues = styled(List)`
  li {
    margin-top: 15px;
  }
`;

export const IconContainer = styled.div`
  & > * {
    margin-left: 10px;
  }

  & > *:first-child {
    margin-left: 0px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  width: 100%;
  & > p {
    padding-top: 5px;
  }
`;

export const LeftSideAddress = styled.div`
  margin-left: 70px;
  margin-right: 20px;
`;

export const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  display: inline-block;

  ${() => theme.media.tablet} {
    width: 40px;
    height: 40px;
  }
`;

export const P12Caps = styled.p`
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
`;

export const P16 = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: white;
  @media (max-width: 930px) {
    color: black;
  }
`;

export const H5Caps = styled.h5`
  font-weight: 600;
  font-size: 28px;
  line-height: 24px;
  letter-spacing: 0.08em;
  text-transform: capitalize;
  color: ${({ color }) => theme.colors[color] || color || theme.colors.black2};
`;

export const Caption12 = styled.p`
  color: #684aa0;
  text-transform: capitalize;
  font-family: ff-shamel-bold;
  /* font-weight: 900; */
  font-size: 16px;
  text-align: center;
`;

export const SocialContainer = styled.div`
  display: flex;
  width: 30%;
  height: 50;
  position: absolute;
  top: -30px;
  right: 30px;
  @media (max-width: 960px) {
    top: auto;
    bottom: 0;
    right: 40%;
  }
  @media (max-width: 500px) {
    top: auto;
    bottom: 0;
    right: 60%;
  }
`;

export const ImgContainer = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocialLink = styled.a`
  box-shadow: 1px 0px 13px 0px rgba(243, 198, 145, 1);
  width: 50px;
  height: 50px;
  min-width: 50px;
  min-height: 50px;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5%;
  margin-left: 5%;
  text-decoration: none;
  border: 2px solid #fff;
  transition: 0.3s;
  padding: 2px;
  background: #fff;
  &:hover {
    background: green;
  }
  @ media (max-width: 930px) {
    width: 30px;
    height: 30px;
    min-width: 30px;
    min-height: 30px;
  }
`;

export const ColorButton = withStyles(() => ({
  root: {
    color: '#fff',
    width: '90%',
    marginLeft: 30,
    backgroundColor: '#7c5dbd',
    '&:hover': {
      backgroundColor: '#a57dfb',
    },
  },
}))(Button);

export const InputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 20px;
  @media (max-width: 930px) {
    justify-content: center;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
`;

export const Label = styled.label`
  text-align: left;
  width: 100%;
  @media (max-width: 930px) {
    width: 90%;
  }
`;
