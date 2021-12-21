import React, { useState } from 'react';
import { useUser } from '../../providers/UserProvider';
import Modal from '../../components/Modal';
import coins from '../../assets/images/coin.svg';
import avatar from '../../assets/images/profile.svg';

import * as S from './styles';

type Props = {
  children: React.ReactNode;
};

const GameTemplate = ({ children }: Props) => {
  const [openLogin, setOpenLogin] = useState(false);
  const { user }: any = useUser();

  const checkUser = () => {
    if (!user) setOpenLogin(true);
  };

  return (
    <S.Container>
      <S.Sound />
      <S.Coins src={coins} />
      <S.Avatar src={avatar} onClick={checkUser} />
      {user ? <S.UserName onClick={checkUser}>{user.name}</S.UserName> : ''}
      {children}

      <Modal
        title="LOGIN"
        type="login"
        open={openLogin}
        onClose={() => setOpenLogin(false)}
      />
    </S.Container>
  );
};

export default GameTemplate;
