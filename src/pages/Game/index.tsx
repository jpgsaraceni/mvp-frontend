import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GameTemplate from '../../components/GameTemplate';
import points from '../../assets/images/points.svg';
import exit from '../../assets/images/exit-button.svg';
import * as S from './styles';

const Game = () => {
  const navigateTo = useNavigate();

  return (
    <GameTemplate>
      <S.Points src={points} />
      <S.Exit src={exit} onClick={() => navigateTo('/world')} />
    </GameTemplate>
  );
};

export default Game;
