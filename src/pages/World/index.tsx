import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GameTemplate from '../../components/GameTemplate';
import phase1 from '../../assets/images/world.svg';
import namePhase1 from '../../assets/images/name-phase-1.svg';
import namePhase2 from '../../assets/images/name-phase-2.svg';
import phase2 from '../../assets/images/lock-world.svg';
import playButton from '../../assets/images/play-button.svg';
import disablePlayButton from '../../assets/images/disable-play-button.svg';
import ranking from '../../assets/images/podium.svg';
import store from '../../assets/images/store.svg';
import next from '../../assets/images/next.svg';
import prev from '../../assets/images/previous.svg';

import * as S from './styles';

const World = () => {
  const [phase, setPhase] = useState(1);
  const navigateTo = useNavigate();

  const ChangePhase = () => {
    if (phase === 1) {
      setPhase(2);
    } else {
      setPhase(1);
    }
  };

  return (
    <GameTemplate>
      <S.PrevPhase onClick={ChangePhase} src={prev} />
      <S.NextPhase onClick={ChangePhase} src={next} />

      <S.Phase src={phase === 1 ? phase1 : phase2} />
      <S.PhaseName src={phase === 1 ? namePhase1 : namePhase2} phase={phase} />
      <S.PlayButton
        src={phase === 1 ? playButton : disablePlayButton}
        phase={phase}
        onClick={() => navigateTo('/game')}
      />

      <S.Ranking src={ranking} />
      <S.Store src={store} />
    </GameTemplate>
  );
};

export default World;
