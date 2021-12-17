import React from 'react';

import coins from '../../assets/images/coin.svg';
import avatar from '../../assets/images/profile.svg';

import * as S from './styles';

type Props = {
  children: React.ReactNode;
};

const GameTemplate = ({ children }: Props) => {
  return (
    <S.Container>
      <S.Sound />
      <S.Coins src={coins} />
      <S.Avatar src={avatar} />
      {children}
    </S.Container>
  );
};

export default GameTemplate;
