import styled from 'styled-components';

export const Points = styled.img`
  height: 35px;
  position: absolute;
  top: 2%;
  left: 3%;
`;

export const FirstBoard = styled.img`
  height: 206px;
  position: absolute;
  top: 20%;
  left: 10%;
  transition: all 0.7s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const SecondBoard = styled.img`
  height: 206px;
  position: absolute;
  top: 20%;
  left: 37%;
  transition: all 0.7s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ThirdBoard = styled.img`
  height: 206px;
  position: absolute;
  top: 20%;
  left: 64%;
  transition: all 0.7s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Exit = styled.img`
  height: 60px;
  position: absolute;
  bottom: 2%;
  left: 3%;
  transition: all 0.7s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
