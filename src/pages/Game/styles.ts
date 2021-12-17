import styled, { css } from 'styled-components';
import FlipCard from '../../components/FlipCard';

type IconProps = {
  display: boolean;
};

type Props = {
  top: string;
  left: string;
};

export const Card = styled(FlipCard)<Props>`
  ${({ top, left }) => css`
    position: absolute;
    left: ${left};
    top: ${top};
  `}
`;

export const Board = styled.div<Props>`
  ${({ top, left }) => css`
    height: 206px;
    position: absolute;
    left: ${left};
    top: ${top};
  `}
`;

export const Icon = styled.img<Props>`
  ${({ top, height, left }) => css`
    position: absolute;
    height: ${height};
    top: ${top};
    left: ${left};
    /* display: none; */
  `}
`;

export const Points = styled.img`
  height: 35px;
  position: absolute;
  top: 2%;
  left: 3%;
`;

export const PointsValue = styled.div`
  height: 35px;
  position: absolute;
  top: 3%;
  left: 6.5%;
  font-family: 'Source Sans 3', sans-serif;
  color: white;
  font-weight: bold;
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
