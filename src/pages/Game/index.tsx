import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GameTemplate from '../../components/GameTemplate';
import points from '../../assets/images/points.svg';
import exit from '../../assets/images/exit-button.svg';
import firstBoard from '../../assets/images/first-board.svg';
import secondBoard from '../../assets/images/second-board.svg';
import thirdBoard from '../../assets/images/third-board.svg';

import * as S from './styles';

const Game = () => {
  const navigateTo = useNavigate();

  return (
    <GameTemplate>
      <S.Points src={points} />

      <S.FirstBoard src={firstBoard} />
      <S.SecondBoard src={secondBoard} />
      <S.ThirdBoard src={thirdBoard} />

      <S.Exit src={exit} onClick={() => navigateTo('/world')} />
    </GameTemplate>
  );
};

export default Game;
