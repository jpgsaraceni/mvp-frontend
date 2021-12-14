import styled, { css } from 'styled-components';

export const FlipBoxInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

export const FlipBox = styled.div`
  background-color: transparent;
  width: 90px;
  height: 120px;
  perspective: 1000px;

  &:hover ${FlipBoxInner} {
    transform: rotateY(180deg);
    cursor: pointer;
  }
`;

export const FlipBoxFront = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
`;

export const FlipBoxBack = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;
