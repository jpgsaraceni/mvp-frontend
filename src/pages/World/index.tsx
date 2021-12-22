import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../providers/UserProvider';
import GameTemplate from '../../components/GameTemplate';
import phase1 from '../../assets/images/world.svg';
import namePhase1 from '../../assets/images/name-phase-1.svg';
import namePhase2 from '../../assets/images/name-phase-2.svg';
import phase2 from '../../assets/images/lock-world.svg';
import playButton from '../../assets/images/play-button.svg';
import disablePlayButton from '../../assets/images/disable-play-button.svg';
import rankingIcon from '../../assets/images/podium.svg';
import storeIcon from '../../assets/images/store.svg';
import next from '../../assets/images/next.svg';
import prev from '../../assets/images/previous.svg';
import Modal from '../../components/Modal';

import * as S from './styles';

const World = () => {
  const { cookies } = useUser();
  const [phase, setPhase] = useState(1);
  const [openRanking, setOpenRanking] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const navigateTo = useNavigate();

  const ChangePhase = () => {
    if (phase === 1) {
      setPhase(2);
    } else {
      setPhase(1);
    }
  };

  const openStore = () => {
    if (cookies.get('auth')) {
      navigateTo('/store');
    } else {
      setOpenLogin(true);
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

      <S.Ranking src={rankingIcon} onClick={() => setOpenRanking(true)} />
      <S.Store src={storeIcon} onClick={openStore} />

      <Modal
        title="RANKING"
        type="ranking"
        open={openRanking}
        onClose={() => setOpenRanking(false)}
      />

      <Modal
        title="LOGIN"
        type="login"
        open={openLogin}
        onClose={() => setOpenLogin(false)}
      />
    </GameTemplate>
  );
};

export default World;
