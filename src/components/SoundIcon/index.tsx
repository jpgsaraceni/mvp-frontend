import React, { useState } from 'react';

import soundOn from '../../assets/images/sound-on.svg';
import soundOff from '../../assets/images/sound-off.svg';
import * as S from './styles';

type Props = {
  className?: string;
};

const SoundIcon = ({ className }: Props) => {
  const [sound, setSound] = useState(true);

  const onChangeSound = () => {
    setSound((sound) => !sound);
  };

  return (
    <S.Sound
      className={className}
      onClick={onChangeSound}
      src={sound ? soundOn : soundOff}
    />
  );
};

export default SoundIcon;
