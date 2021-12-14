import styled, { css } from 'styled-components';
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
  left: 10%;
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
