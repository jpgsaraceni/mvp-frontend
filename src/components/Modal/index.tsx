import React, { useState } from 'react';
import * as S from './styles';

type ModalProps = {
  width?: string;
  height?: string;
  type?: string;
  title?: string;
  message?: string;
  children?: any;
  _openModal?: boolean;
  onClick?: any;
};

const Modal: React.FC<ModalProps> = ({
  width,
  height,
  type,
  title,
  _openModal,
  message,
  onClick,
  children
}) => {
  const [openModal, setOpenModal] = useState(_openModal);

  return (
    <S.Container
      openModal={openModal}
    >
      <S.ModalContainer
        width={width}
        height={height}
        type={type}
      >
        <S.CloseIcon onClick={() => setOpenModal(false)} />
        <S.Content>
          {type === 'ranking' ?
            <>
              <S.RankingTitle>
                {title}
              </S.RankingTitle>
              <S.TopRanksTable>
                <S.FirstPlaceRanking>
                  <td>#{1}</td>
                  <td>Juh</td>
                  <td>999</td>
                </S.FirstPlaceRanking>
                <S.SecondPlaceRanking>
                  <td>#{2}</td>
                  <td>JaoGameplayVascao</td>
                  <td>888</td>
                </S.SecondPlaceRanking>
                <S.ThirdPlaceRanking>
                  <td>#{3}</td>
                  <td>AnAp</td>
                  <td>777</td>
                </S.ThirdPlaceRanking>
                <S.OthersPlaceRanking>
                  <td>#{4}</td>
                  <td>D13g0</td>
                  <td>666</td>
                </S.OthersPlaceRanking>
                <S.OthersPlaceRanking>
                  <td>#{5}</td>
                  <td>F431</td>
                  <td>555</td>
                </S.OthersPlaceRanking>
                <S.OthersPlaceRanking>
                  <td></td>
                  <td>...</td>
                  <td></td>
                </S.OthersPlaceRanking>
                <S.MainPlayerPlaceRanking>
                  <td>#{965}</td>
                  <td>Lina</td>
                  <td>152</td>
                </S.MainPlayerPlaceRanking>
              </S.TopRanksTable>
            </>
            :
            type === 'login' ?
              <>
                <S.SessionTitle>
                  {title}
                </S.SessionTitle>
                <input type="text" placeholder="EMAIL" />
                <input type="password" placeholder="SENHA" />
                <div>
                  <input type="checkbox" id="keep-login" />
                  <label htmlFor="keep-login">MANTER CONECTADO</label>
                </div>
                <button type="submit">ENTRAR</button>
                <S.SwitchModal>CADASTRAR</S.SwitchModal>
              </>
              : type === 'signin' ?
                <>
                  <S.SessionTitle>
                    {title}
                  </S.SessionTitle>
                  <input type="text" placeholder="EMAIL" />
                  <input type="password" placeholder="SENHA" />
                  <input type="password" placeholder="CONFIRMAR SENHA" />
                  <button type="submit">CADASTRAR</button>
                  <S.SwitchModal>LOGIN</S.SwitchModal>
                </>
                : type === 'choose_name' ?
                  <>
                    <S.SessionTitle>
                      {title}
                    </S.SessionTitle>
                    <S.ModalMessage>
                      {message}
                    </S.ModalMessage>
                    <input type="text" placeholder="NOME" />
                    <div>
                      <input type="checkbox" id="keep-name" />
                      <label htmlFor="keep-name">LEMBRAR DA DECISÃO</label>
                    </div>
                    <button type="submit" onClick={onClick}>CONFIRMAR</button>
                  </>
                  : type === 'store' ?
                    <>
                      <S.SessionTitle>
                        {title}
                      </S.SessionTitle>
                      <S.ModalMessage>
                        {message}
                      </S.ModalMessage>
                      <div>
                        <button type="submit">CANCELAR</button>
                        <button type="submit">ACEITAR</button>
                      </div>
                    </>
                    : <>{children}</>
          }
        </S.Content>
      </S.ModalContainer>
    </S.Container>
  );
}

export default Modal;