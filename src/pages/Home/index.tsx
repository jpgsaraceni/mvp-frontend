import React, { useState } from 'react';
import playbutton from '../../assets/images/play-button.svg';
import name from '../../assets/images/nameless-game.svg';
import help from '../../assets/images/help-button.svg';
import soundOn from '../../assets/images/sound-on.svg';
import soundOff from '../../assets/images/sound-off.svg';
import * as S from './styles';

const Home = () => {
  const [sound, setSound] = useState(true);

  const ChangeSound = () => {
    if (sound) {
      setSound(false);
    } else {
      setSound(true);
    }
  };

  return (
    <S.Container>
      <S.PlayButton src={playbutton} />
      <S.Name src={name} />
      <S.Help src={help} />
      <S.Sound onClick={ChangeSound} src={sound ? soundOn : soundOff} />
    </S.Container>
  );
};

export default Home;
