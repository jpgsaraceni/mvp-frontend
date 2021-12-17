import React, { useState } from 'react';

import soundOn from '../../assets/images/sound-on.svg';
import soundOff from '../../assets/images/sound-off.svg';
import * as S from './styles';
import { useSound } from '../../hooks/useSound';

type Props = {
  className?: string;
};

const SoundIcon = ({ className }: Props) => {
  const audio = useSound()
  const muted = !audio.isMuted()
  const [sound, setSound] = useState(muted);

  const onChangeSound = () => {
    const soundStatus = !sound;
    setSound(soundStatus);
    audio.toggleAudio()
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
