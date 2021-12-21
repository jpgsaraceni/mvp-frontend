import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpenModal(false)
    }, 5000)

    return () => clearTimeout(timeout)

  }, [openModal])

  return (
    <S.Container
      openModal={openModal}
    >
      <S.ModalContainer
        width={width}
        height={height}
        type={type}
      >
        {type === 'success' ?
          <>
            <S.SuccessIcon />
            <S.ModalMessage>
              {message}
            </S.ModalMessage>
          </>
          : type === 'error' ?
            <>
              <S.WarningIcon />
              <S.ModalMessage>
                {message}
              </S.ModalMessage>
            </>
            : <>{children}</>
        }
      </S.ModalContainer>
    </S.Container>
  );
}

export default Modal;