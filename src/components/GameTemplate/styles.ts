import styled from 'styled-components';
import SoundIcon from '../../components/SoundIcon';

export const Container = styled.div`
  height: 100vh;
  background-color: #1a4176;
  position: relative;
`;

export const Sound = styled(SoundIcon)`
  position: absolute;
  top: 2.5%;
  left: 85%;
`;

export const Coins = styled.img`
  height: 35px;
  position: absolute;
  top: 2%;
  left: 12%;
`;

export const CoinsNumber = styled.p`
  position: absolute;
  top: 2%;
  left: 9.5%;
  display: inline-block;
  font-size: 25px;
  font-family: 'Source Sans 3', sans-serif;
  color: white;
`;

export const Avatar = styled.img`
  height: 35px;
  position: absolute;
  top: 2%;
  left: 89%;
  transition: all 0.7s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const UserName = styled.div`
  font-size: 16px;
  position: absolute;
  top: 3%;
  left: 92.5%;
  font-family: 'Source Sans 3', sans-serif;
  color: white;
  font-weight: bold;
`;
