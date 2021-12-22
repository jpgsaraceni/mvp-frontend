import React, { ReactNode, useEffect, useState } from 'react';
import { useSound } from '../../hooks/useSound';
import { useUser } from '../../providers/UserProvider';
import { bffapi } from '../../services/bffapi';
import * as S from './styles';

const topPlayers = [
  {
    position: 1,
    name: 'Juliana',
    score: 190,
  },
  {
    position: 2,
    name: 'Juliana',
    score: 190,
  },
  {
    position: 3,
    name: 'Juliana',
    score: 190,
  },
  {
    position: 4,
    name: 'Juliana',
    score: 190,
  },
  {
    position: 5,
    name: 'Juliana',
    score: 190,
  },
  {
    position: 6,
    name: 'Juliana',
    score: 190,
  },
  {
    position: 7,
    name: 'Juliana',
    score: 190,
  },
];

type ModalProps = {
  width?: string;
  height?: string;
  type?: string;
  title?: string;
  message?: string;
  children?: ReactNode;
  open?: boolean;
  RankingInput?: object;
  onClick?: () => void;
  onClose?: () => void;
};

type RankingProps = {
  position: Number,
  name: String,
  score: Number,
}

const Modal: React.FC<ModalProps> = ({
  width,
  height,
  type,
  title,
  open,
  message,
  onClick,
  RankingInput,
  onClose,
  children,
}) => {
  const sound = useSound();
  const { signIn } = useUser();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [ranking, setRanking] = useState<RankingProps[]>([]);
  const [modalType, setModalType] = useState(type);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    signIn({ email, password });
  };

  useEffect(() => {
    const req = async () => {
      try {
        const result = await bffapi.get('/ranking');
        setRanking(result.data);
      } catch (error) {}
    };
    req();
  }, []);

  return (
    <S.Container open={open}>
      <S.ModalContainer width={width} height={height} type={type}>
        <S.CloseIcon onClick={onClose} />
        <S.Content>
          {modalType === 'ranking' ? (
            <>
              <S.RankingTitle>{title}</S.RankingTitle>
              <S.TopRanksTable>
                {ranking.map((player, i) => (
                  <tbody>
                  <S.PlaceRanking key={i}>
                    <td>#{player.position}</td>
                    <td>{player.name}</td>
                    <td>{player.score}</td>
                  </S.PlaceRanking>
                  </tbody>
                ))}
              </S.TopRanksTable>
            </>
          ) : modalType === 'login' ? (
            <>
              <S.SessionTitle>{title}</S.SessionTitle>
              <form onSubmit={handleSubmit}>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="EMAIL"
                />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="SENHA"
                />
                <div>
                  <input type="checkbox" id="keep-login" />
                  <label htmlFor="keep-login">MANTER CONECTADO</label>
                </div>
                <button type="submit" onClick={onClick}>ENTRAR</button>
              </form>
              <S.SwitchModal onClick={()=>setModalType('signin')}>CADASTRAR</S.SwitchModal>
            </>
          ) : modalType === 'signin' ? (
            <>
              <S.SessionTitle>{title}</S.SessionTitle>
              <input type="text" placeholder="EMAIL" />
              <input type="password" placeholder="SENHA" />
              <input type="password" placeholder="CONFIRMAR SENHA" />
              <button type="submit">CADASTRAR</button>
              <S.SwitchModal onClick={()=>setModalType('login')}>LOGIN</S.SwitchModal>
            </>
          ) : modalType === 'choose_name' ? (
            <>
              {sound.playPhaseEnd()}
              <S.SessionTitle>{title}</S.SessionTitle>
              <S.ModalMessage>{message}</S.ModalMessage>
              {RankingInput}
              <div>
                <input type="checkbox" id="keep-name" />
                <label htmlFor="keep-name">LEMBRAR DA DECISÃO</label>
              </div>
              <button type="submit" onClick={onClick}>
                CONFIRMAR
              </button>
            </>
          ) : modalType === 'store' ? (
            <>
              <S.SessionTitle>{title}</S.SessionTitle>
              <S.ModalMessage>{message}</S.ModalMessage>
              <div>
                <button type="submit">CANCELAR</button>
                <button type="submit">ACEITAR</button>
              </div>
            </>
          ) : (
            <>{children}</>
          )}
        </S.Content>
      </S.ModalContainer>
    </S.Container>
  );
};

export default Modal;
