import styled from 'styled-components';
import background from '../../assets/images/home-background.svg';
import SoundIcon from '../../components/SoundIcon';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-color: #002b66;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const PlayButton = styled.img`
  height: 102px;
  position: absolute;
  top: 50%;
  left: 80%;
  transition: all 0.7s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Name = styled.img`
  height: 40px;
  position: absolute;
  top: 35%;
  left: 76%;
`;

export const Help = styled.img`
  height: 38px;
  position: absolute;
  top: 5%;
  left: 93%;
  transition: all 0.7s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const Sound = styled(SoundIcon)`
  position: absolute;
  top: 5.7%;
  left: 88%;
`;
