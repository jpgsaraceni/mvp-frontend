import styled from 'styled-components';
import WarningIconSvg from '../../assets/images/warning-icon.svg';
import SuccessIconSvg from '../../assets/images/success-icon.svg';

interface ContainerProps {
  width?: string;
  height?: string;
  type?: string;
  openModal?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: ${(props) => props.openModal === true ? 'flex' : 'none'};
  position: absolute;
  padding-left: 20px;
  padding-bottom: 20px;
  z-index: 2;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100vw;
  height: 100vh;
  /* background: rgba(0, 0, 0, 0.6); */
`;

export const ModalContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 20px;
  background: #162E64;
  mix-blend-mode: normal;
  border-radius: 5px;
`;

export const WarningIcon = styled.div`
  width: 35px;
  height: 35px;
  background-image: url(${WarningIconSvg});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const SuccessIcon = styled.div`
  width: 35px;
  height: 35px;
  background-image: url(${SuccessIconSvg});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ModalMessage = styled.span`
  margin-left: 8px;
  font-family: Comic Sans MS, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  color: #F7F7F7;
`