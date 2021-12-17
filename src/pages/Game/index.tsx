import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Droppable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';
import GameTemplate from '../../components/GameTemplate';
import Modal from '../../components/Modal';

import pointsIcon from '../../assets/images/points.svg';
import exit from '../../assets/images/exit-button.svg';
import firstBoard from '../../assets/images/first-board.svg';
import secondBoard from '../../assets/images/second-board.svg';
import thirdBoard from '../../assets/images/third-board.svg';
import penguinIcon from '../../assets/images/animals/penguin.svg';
import penguinFront from '../../assets/images/animals/penguin-front.svg';
import penguinBack from '../../assets/images/animals/penguin-back.svg';
import catIcon from '../../assets/images/animals/cat.svg';
import catFront from '../../assets/images/animals/cat-front.svg';
import catBack from '../../assets/images/animals/cat-back.svg';
import fishIcon from '../../assets/images/animals/fish.svg';
import fishFront from '../../assets/images/animals/fish-front.svg';
import fishBack from '../../assets/images/animals/fish-back.svg';
import koalaIcon from '../../assets/images/animals/koala.svg';
import koalaFront from '../../assets/images/animals/koala-front.svg';
import koalaBack from '../../assets/images/animals/koala-back.svg';
import pandaIcon from '../../assets/images/animals/panda.svg';
import pandaFront from '../../assets/images/animals/panda-front.svg';
import pandaBack from '../../assets/images/animals/panda-back.svg';
import polarBearIcon from '../../assets/images/animals/polar-bear.svg';
import polarBearFront from '../../assets/images/animals/polar-bear-front.svg';
import polarBearBack from '../../assets/images/animals/polar-bear-back.svg';
import turtleIcon from '../../assets/images/animals/turtle.svg';
import turtleFront from '../../assets/images/animals/turtle-front.svg';
import turtleBack from '../../assets/images/animals/turtle-back.svg';
import snowOwlIcon from '../../assets/images/animals/snow-owl.svg';
import snowOwlFront from '../../assets/images/animals/snow-owl-front.svg';
import snowOwlBack from '../../assets/images/animals/snow-owl-back.svg';
import redPandaIcon from '../../assets/images/animals/red-panda.svg';
import redPandaFront from '../../assets/images/animals/red-panda-front.svg';
import redPandaBack from '../../assets/images/animals/red-panda-back.svg';

import * as S from './styles';

const type = 'Image';

const cards = [
  {
    id: 'penguin',
    acceptDropId: 'snow',
    unlockIconId: 'penguinIcon',
    imageFront: penguinFront,
    imageBack: penguinBack,
    top: '55%',
    left: '25%',
  },
  {
    id: 'snowOwl',
    acceptDropId: 'snow',
    unlockIconId: 'snowOwlIcon',
    imageFront: snowOwlFront,
    imageBack: snowOwlBack,
    top: '55%',
    left: '55%',
  },
  {
    id: 'polarBear',
    acceptDropId: 'snow',
    unlockIconId: 'polarBearIcon',
    imageFront: polarBearFront,
    imageBack: polarBearBack,
    top: '78%',
    left: '50%',
  },
  {
    id: 'fish',
    acceptDropId: 'house',
    unlockIconId: 'fishIcon',
    imageFront: fishFront,
    imageBack: fishBack,
    top: '55%',
    left: '45%',
  },
  {
    id: 'cat',
    acceptDropId: 'house',
    unlockIconId: 'catIcon',
    imageFront: catFront,
    imageBack: catBack,
    top: '55%',
    left: '65%',
  },
  {
    id: 'turtle',
    acceptDropId: 'house',
    unlockIconId: 'turtleIcon',
    imageFront: turtleFront,
    imageBack: turtleBack,
    top: '78%',
    left: '30%',
  },
  {
    id: 'redPanda',
    acceptDropId: 'forest',
    unlockIconId: 'redPandaIcon',
    imageFront: redPandaFront,
    imageBack: redPandaBack,
    top: '55%',
    left: '35%',
  },
  {
    id: 'koala',
    acceptDropId: 'forest',
    unlockIconId: 'koalaIcon',
    imageFront: koalaFront,
    imageBack: koalaBack,
    top: '78%',
    left: '40%',
  },
  {
    id: 'panda',
    acceptDropId: 'forest',
    unlockIconId: 'pandaIcon',
    imageFront: pandaFront,
    imageBack: pandaBack,
    top: '78%',
    left: '60%',
  },
];

const boards = [
  {
    id: 'snow',
    src: firstBoard,
    top: '20%',
    left: '10%',
  },
  {
    id: 'house',
    src: secondBoard,
    top: '20%',
    left: '37%',
  },
  {
    id: 'forest',
    src: thirdBoard,
    top: '20%',
    left: '64%',
  },
];

const icons = [
  {
    id: 'penguinIcon',
    src: penguinIcon,
    top: '39%',
    height: '10%',
    left: '12%',
  },
  {
    id: 'redPandaIcon',
    src: redPandaIcon,
    top: '39%',
    height: '10%',
    left: '82%',
  },
  {
    id: 'fishIcon',
    src: fishIcon,
    top: '39%',
    height: '10%',
    left: '40%',
  },
  {
    id: 'snowOwlIcon',
    src: snowOwlIcon,
    top: '39%',
    height: '10%',
    left: '22%',
  },
  {
    id: 'catIcon',
    src: catIcon,
    top: '39%',
    height: '10%',
    left: '47%',
  },
  {
    id: 'turtleIcon',
    src: turtleIcon,
    top: '41%',
    height: '8%',
    left: '52%',
  },
  {
    id: 'koalaIcon',
    src: koalaIcon,
    top: '39%',
    height: '10%',
    left: '75%',
  },
  {
    id: 'polarBearIcon',
    src: polarBearIcon,
    top: '39%',
    height: '10%',
    left: '17%',
  },
  {
    id: 'pandaIcon',
    src: pandaIcon,
    top: '39%',
    height: '10%',
    left: '68%',
  },
];

const Game = () => {
  const navigateTo = useNavigate();
  const [points, setPoints] = useState(100);
  const [correctCards, setCorrectCards] = useState<string[]>([]);
  const [unlockedIcons, setUnlockedIcons] = useState<string[]>([]);

  const onDragEng = (e: any) => {
    const card = cards.find((card) => card.id === e.draggableId);

    if (card && card.acceptDropId === e?.destination?.droppableId) {
      setCorrectCards((prev) => [...prev, card.id]);
      setUnlockedIcons((prev) => [...prev, card.unlockIconId]);
      setPoints((prev) => prev + 10);
    } else {
      setPoints((prev) => (prev >= 10 ? points - 10 : 0));
    }
  };

  const visibleCards = useMemo(() => {
    return cards.filter((card) => !correctCards.includes(card.id));
  }, [cards, correctCards]);

  const visibleIcons = useMemo(() => {
    return icons.filter((icon) => unlockedIcons.includes(icon.id));
  }, [icons, unlockedIcons]);

  return (
    <DragDropContext
      onBeforeCapture={console.log}
      onBeforeDragStart={console.log}
      onDragStart={console.log}
      onDragUpdate={console.log}
      onDragEnd={(event) => onDragEng(event)}
    >
      <GameTemplate>
        <S.Points src={pointsIcon} />

        <S.PointsValue>{points}</S.PointsValue>

        {boards.map((board, index) => (
          <Droppable key={index} droppableId={board.id} type="card">
            {(provided, snapshot) => (
              <S.Board
                ref={provided.innerRef}
                left={board.left}
                top={board.top}
                {...provided.droppableProps}
              >
                <img src={board.src} />
              </S.Board>
            )}
          </Droppable>
        ))}

        <Droppable
          key={visibleCards.length.toString()}
          droppableId="list"
          type="card"
        >
          {(provided, snapshot) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {visibleCards.map((card, index) => (
                <S.Card key={index} index={index} {...card} />
              ))}
            </div>
          )}
        </Droppable>

        {visibleIcons.map((icon) => (
          <S.Icon
            src={icon.src}
            left={icon.left}
            top={icon.top}
            height={icon.height}
          />
        ))}

        <S.Exit src={exit} onClick={() => navigateTo('/world')} />
      </GameTemplate>
      {
        points >= 190 ?
          <Modal
            title="PARABÉNS"
            type="choose_name"
            message="INSIRA UM NOME PARA REGISTRAR A SUA PONTUAÇÃO NO RANK."
            _openModal={true}
            onClick={() => navigateTo('/world')}
          /> 
        : ""
      }
    </DragDropContext>
  );
};

export default Game;
