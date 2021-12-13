import { useNavigate } from 'react-router-dom';
import playbutton from '../../assets/images/play-button.svg';
import name from '../../assets/images/nameless-game.svg';
import help from '../../assets/images/help-button.svg';
import * as S from './styles';

const Home = () => {
  const navigateTo = useNavigate();

  return (
    <S.Container>
      <S.PlayButton src={playbutton} onClick={() => navigateTo('/world')} />
      <S.Name src={name} />
      <S.Help src={help} />
      <S.Sound />
    </S.Container>
  );
};

export default Home;
