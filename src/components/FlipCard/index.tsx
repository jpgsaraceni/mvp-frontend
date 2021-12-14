import React from 'react';

import * as S from './styles';

type Props = {
  className?: string;
  imageFront: string;
  imageBack: string;
};

const FlipCard = ({ className, imageFront, imageBack }: Props) => {
  return (
    <S.FlipBox className={className}>
      <S.FlipBoxInner>
        <S.FlipBoxFront src={imageFront} />
        <S.FlipBoxBack src={imageBack} />
      </S.FlipBoxInner>
    </S.FlipBox>
  );
};

export default FlipCard;
