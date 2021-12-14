import styled from 'styled-components';

export const Points = styled.img`
  height: 35px;
  position: absolute;
  top: 2%;
  left: 3%;
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
