import React, { useState } from 'react';
import GameTemplate from '../../components/GameTemplate';
import points from '../../assets/images/points.svg';

import * as S from './styles';

const Game = () => {
  return (
    <GameTemplate>
      <S.Points src={points} />
    </GameTemplate>
  );
};

export default Game;
