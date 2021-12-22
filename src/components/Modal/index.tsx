import React, { ReactNode, useEffect, useState, useRef } from 'react';
import { useSound } from '../../hooks/useSound';
import { useUser } from '../../providers/UserProvider';
import { bffapi } from '../../services/bffapi';
import * as S from './styles';
import ModalStatus from '../../components/ModalStatus';

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
  const { signIn, register } = useUser();
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const [ranking, setRanking] = useState<RankingProps[]>([]);
  const [modalType, setModalType] = useState(type);

  const [openModal, setOpenModal] = useState(false);

  const emailRegisterRef = useRef<HTMLInputElement>(null);
  const nameRegisterRef = useRef<HTMLInputElement>(null);
  const passwordRegisterRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await signIn(emailRef.current!.value, passwordRef.current!.value);
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
                  ref={emailRef}
                  type="text"
                  placeholder="EMAIL"
                />
                <input
                  ref={passwordRef}
                  type="password"
                  placeholder="SENHA"
                />
                <button type="submit" onClick={onClick}>ENTRAR</button>
              </form>
              <S.SwitchModal onClick={()=>setModalType('signup')}>CADASTRAR</S.SwitchModal>
            </>
          ) : modalType === 'signup' ? (
            <>
              <S.SessionTitle>CADASTRAR</S.SessionTitle>
              <input type="text" ref={emailRegisterRef} placeholder="EMAIL" />
              <input type="text" ref={nameRegisterRef} placeholder="NOME" />
              <input type="password" ref={passwordRegisterRef} placeholder="SENHA" />
              <input type="password" placeholder="CONFIRMAR SENHA" />
              <button type="submit" onClick={async () => {
                try {
                  register(nameRegisterRef.current!.value, emailRegisterRef.current!.value, passwordRegisterRef.current!.value)
                } catch (e) {
                  console.log(e);
                  setOpenModal(true);
                  <ModalStatus type="error" message='Erro ao cadastrar' isOpen={openModal} />
                }
              }}>CADASTRAR</button>
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
