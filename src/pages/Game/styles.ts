import styled from 'styled-components';
import FlipCard from '../../components/FlipCard';

export const Penguin = styled(FlipCard)`
  position: absolute;
  top: 55%;
  left: 25%;
`;
export const RedPanda = styled(FlipCard)`
  position: absolute;
  top: 55%;
  left: 35%;
`;
export const Fish = styled(FlipCard)`
  position: absolute;
  top: 55%;
  left: 45%;
`;
export const SnowOwl = styled(FlipCard)`
  position: absolute;
  top: 55%;
  left: 55%;
`;
export const Cat = styled(FlipCard)`
  position: absolute;
  top: 55%;
  left: 65%;
`;
export const Turtle = styled(FlipCard)`
  position: absolute;
  top: 78%;
  left: 30%;
`;
export const Koala = styled(FlipCard)`
  position: absolute;
  top: 78%;
  left: 40%;
`;
export const PolarBear = styled(FlipCard)`
  position: absolute;
  top: 78%;
  left: 50%;
`;
export const Panda = styled(FlipCard)`
  position: absolute;
  top: 78%;
  left: 60%;
`;

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
