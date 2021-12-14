import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GameTemplate from '../../components/GameTemplate';

import points from '../../assets/images/points.svg';
import exit from '../../assets/images/exit-button.svg';
import firstBoard from '../../assets/images/first-board.svg';
import secondBoard from '../../assets/images/second-board.svg';
import thirdBoard from '../../assets/images/third-board.svg';
import penguinFront from '../../assets/images/animals/penguin-front.svg';
import penguinBack from '../../assets/images/animals/penguin-back.svg';
import catFront from '../../assets/images/animals/cat-front.svg';
import catBack from '../../assets/images/animals/cat-back.svg';
import fishFront from '../../assets/images/animals/fish-front.svg';
import fishBack from '../../assets/images/animals/fish-back.svg';
import koalaFront from '../../assets/images/animals/koala-front.svg';
import koalaBack from '../../assets/images/animals/koala-back.svg';
import pandaFront from '../../assets/images/animals/panda-front.svg';
import pandaBack from '../../assets/images/animals/panda-back.svg';
import polarBearFront from '../../assets/images/animals/polar-bear-front.svg';
import polarBearBack from '../../assets/images/animals/polar-bear-back.svg';
import turtleFront from '../../assets/images/animals/turtle-front.svg';
import turtleBack from '../../assets/images/animals/turtle-back.svg';
import snowOwlFront from '../../assets/images/animals/snow-owl-front.svg';
import snowOwlBack from '../../assets/images/animals/snow-owl-back.svg';
import redPandaFront from '../../assets/images/animals/red-panda-front.svg';
import redPandaBack from '../../assets/images/animals/red-panda-back.svg';

import * as S from './styles';

const Game = () => {
  const navigateTo = useNavigate();

  return (
    <GameTemplate>
      <S.Points src={points} />

      <S.FirstBoard src={firstBoard} />
      <S.SecondBoard src={secondBoard} />
      <S.ThirdBoard src={thirdBoard} />

      <S.Penguin imageFront={penguinFront} imageBack={penguinBack} />
      <S.RedPanda imageFront={redPandaFront} imageBack={redPandaBack} />
      <S.Fish imageFront={fishFront} imageBack={fishBack} />
      <S.SnowOwl imageFront={snowOwlFront} imageBack={snowOwlBack} />
      <S.Cat imageFront={catFront} imageBack={catBack} />
      <S.Turtle imageFront={turtleFront} imageBack={turtleBack} />
      <S.Koala imageFront={koalaFront} imageBack={koalaBack} />
      <S.PolarBear imageFront={polarBearFront} imageBack={polarBearBack} />
      <S.Panda imageFront={pandaFront} imageBack={pandaBack} />

      <S.Exit src={exit} onClick={() => navigateTo('/world')} />
    </GameTemplate>
  );
};

export default Game;
