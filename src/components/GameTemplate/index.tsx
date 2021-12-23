import React, { useState, useEffect } from 'react';
import { useUser } from '../../providers/UserProvider';
import Modal from '../../components/Modal';
import coinsIcon from '../../assets/images/coin.svg';
import avatar from '../../assets/images/profile.svg';

import * as S from './styles';
import { bffapi } from '../../services/bffapi';

type Props = {
  children: React.ReactNode;
};

const GameTemplate = ({ children }: Props) => {
  const [openLogin, setOpenLogin] = useState(false);
  const { cookies, coins, setCoins } = useUser();
  const playerName = localStorage.getItem('@droplingo:name');

  const checkUser = () => {
    if (!cookies.get('auth')) setOpenLogin(true);
  };

  useEffect(() => {
    async function req() {
      if(cookies.get('auth')) {
        try {
          const result = await bffapi.get('/coins', {
            headers: {
              Authorization: `Basic ${cookies.get('auth')}`
            }
          })
          console.log(result);
          setCoins(Number(result.data))
        } catch (err) {
          console.log(err);
        }
      }
    }
    req();
  }, [cookies, setCoins, coins])

  return (
    <S.Container>
      <S.Sound />
      <S.Coins src={coinsIcon} /> {cookies.get('auth') ? <S.CoinsNumber>{coins}</S.CoinsNumber> : ''}
      <S.Avatar src={avatar} onClick={checkUser} />
      {playerName ? <S.UserName onClick={checkUser}>{playerName}</S.UserName> : ''}
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
