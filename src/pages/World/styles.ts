import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: #1a4176;
  position: relative;
`;

export const Sound = styled.img`
  height: 27px;
  position: absolute;
  top: 2.5%;
  left: 85%;

  &:hover {
    cursor: pointer;
  }
`;

export const Phase = styled.img`
  height: 35%;
  position: absolute;
  top: 35%;
  left: 43%;
`;

export const NextPhase = styled.img`
  height: 55px;
  position: absolute;
  top: 50%;
  left: 95%;
  transition: all 0.7s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const PrevPhase = styled.img`
  height: 55px;
  position: absolute;
  top: 50%;
  left: 5%;
  transition: all 0.7s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

type PhaseProps = {
  phase: number;
};

export const PhaseName = styled.img`
  ${({ phase }: PhaseProps) => css`
    height: 3%;
    position: absolute;
    top: 73%;
    left: ${phase === 1 ? '43%' : '40%'};
  `}
`;

export const PlayButton = styled.img`
  ${({ phase }: PhaseProps) => css`
    height: 15%;
    position: absolute;
    top: 80%;
    left: 48%;
    transition: all 0.7s ease;

    &:hover {
      cursor: pointer;
      transform: ${phase === 1 ? 'scale(1.1)' : 'scale(1.0)'};
    }
  `}
`;

export const Ranking = styled.img`
  height: 38px;
  position: absolute;
  top: 90%;
  left: 89%;
  transition: all 0.7s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Store = styled.img`
  height: 35px;
  position: absolute;
  top: 2%;
  left: 3%;
  transition: all 0.7s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
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
