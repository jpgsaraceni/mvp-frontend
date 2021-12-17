import styled from 'styled-components';
import CloseIconSvg from '../../assets/images/close-icon.svg';

interface ContainerProps {
  width?: string;
  height?: string;
  type?: string;
  openModal?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: ${(props) => props.openModal === true ? 'flex' : 'none'};
  position: absolute;
  top:0;
  z-index: 2;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
`;

export const ModalContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width !== undefined ? props.width : "810"}px;
  height: ${(props) => props.height !== undefined ? props.height : "331"}px;
  padding: 20px;
  background: #162E64;
  mix-blend-mode: normal;
  border-radius: 5px;
`;

export const CloseIcon = styled.div`
  align-self: flex-end;
  width: 14px;
  height: 14px;
  cursor: pointer;
  background-image: url(${CloseIconSvg});

  &:hover {
    opacity: 0.9;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100% - 34px);

  input{
    width: 200px;
    height: 29px;
    margin-bottom: 8px;
    background: #F7F7F7;
    border: none;
    border-radius: 5px;
    padding-left: 8px;
    font-family: Comic Sans MS, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 1.6rem;
    color: #353535;
  }

  div{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;

    input[type="checkbox"]{
      width: 16px;
      height: 16px;
      margin: 0;
      cursor: pointer;
    }

    label{
      margin-left: 8px;
      font-family: Comic Sans MS, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 1.4rem;
      color: #FFFFFF;
      cursor: pointer;
    }
  }

  button{
    padding: 4px 8px;
    background: #4DD635;
    border: none;
    border-radius: 5px;
    font-family: Comic Sans MS, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 1.6rem;
    color: #FFFFFF;
    margin-top: 8px;
    margin-bottom: 8px;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }
`

export const RankingTitle = styled.span`
  margin-bottom: 20px;
  font-family: Comic Sans MS, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1.8rem;
  text-align: center;
  color: #FFAF1A;
`

export const TopRanksTable = styled.table`
  width: calc(100% - 139px);
`

export const FirstPlaceRanking = styled.tr`
  font-family: Comic Sans MS, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  text-align: center;
  color: #FFDA47;

  td{ 
    padding-bottom: 16px;
  }
`

export const SecondPlaceRanking = styled.tr`
  font-family: Comic Sans MS, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  text-align: center;
  color: #C2C2C2;

  td{ 
    padding-bottom: 16px;
  }
`

export const ThirdPlaceRanking = styled.tr`
  font-family: Comic Sans MS, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  text-align: center;
  color: #B56232;

  td{ 
    padding-bottom: 16px;
  }
`

export const OthersPlaceRanking = styled.tr`
  font-family: Comic Sans MS, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  text-align: center;
  color: #f7f7f7;

  td{ 
    padding-bottom: 16px;
  }
`

export const MainPlayerPlaceRanking = styled.tr`
  background: #132055;
  mix-blend-mode: normal;
  border-radius: 5px;
  font-family: Comic Sans MS, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1.4rem;
  text-align: center;
  color: #2DE0EC;

  td{ 
    padding: 8px;
  }
`

export const SessionTitle = styled.span`
  margin-bottom: 16px;
  font-family: Comic Sans MS, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1.8rem;
  text-align: center;
  color: #f7f7f7;
`

export const SwitchModal = styled.span`
  font-family: Comic Sans MS, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  color: #FFFFFF;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`

export const ModalMessage = styled.span`
  font-family: Comic Sans MS, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.6rem;
  text-align: center;
  color: #F7F7F7;
  margin-bottom: 16px;
`