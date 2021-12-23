import styled, { css } from 'styled-components';

export const BackButton = styled.img`
  height: 35px;
  position: absolute;
  top: 2%;
  left: 3%;

  &:hover {
    cursor: pointer;
  }
`;

export const CategoriesTitle = styled.img`
  height: 16px;
  position: absolute;
  top: 18%;
  left: 6.5%;
`;

export const CategoriesSection = styled.img`
  height: 70%;
  position: absolute;
  top: 22%;
  left: 5%;

  &:hover {
    cursor: pointer;
  }
`;

export const StoreTitle = styled.img`
  height: 16px;
  position: absolute;
  top: 18%;
  left: 55%;
`;

export const StoreBackground = styled.img`
  height: 70%;
  position: absolute;
  top: 22%;
  left: 25%;
`;

export const DoublePoints = styled.img`
  height: 20%;
  position: absolute;
  top: 25%;
  left: 27%;
  transition: all 0.7s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const DoubleCoins = styled.img`
  height: 20%;
  position: absolute;
  top: 25%;
  left: 36%;
  transition: all 0.7s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const MisteryCard = styled.img`
  height: 20%;
  position: absolute;
  top: 25%;
  left: 45%;

  &:hover {
    cursor: pointer;
  }
`;
type Props = {
  isSelected: boolean;
};

export const CardDetails = styled.div<Props>`
  ${({ isSelected }) => css`
    height: 62%;
    width: 36%;
    background-color: rgba(17, 40, 114);
    position: absolute;
    top: 25%;
    left: 55%;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${isSelected ? 'space-between' : 'center'};
    color: white;
    font-size: 14px;
    font-weight: bold;
    padding: 20px;
    font-family: Comic Sans MS, sans-serif;
    text-align: center;
  `}
`;

export const Bottom = styled.div`
  font-size: 14px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const Description = styled.div`
  font-weight: bold;
`;

export const PriceText = styled.div`
  display: flex;
`;

export const Price = styled.div`
  color: yellow;
  margin-left: 5px;
`;

export const BuyButton = styled.img`
  height: 100%;
  transition: all 0.7s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
