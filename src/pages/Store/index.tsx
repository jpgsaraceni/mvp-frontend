import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GameTemplate from '../../components/GameTemplate';
import Modal from '../../components/Modal';

import backButton from '../../assets/images/flat-back-button.svg';
import categoriesTitle from '../../assets/images/categories.svg';
import categoriesSection from '../../assets/images/categories-section.svg';
import storeTitle from '../../assets/images/store-name.svg';
import storeBackground from '../../assets/images/store-background.svg';
import doublePoints from '../../assets/images/double-points.svg';
import doubleCoins from '../../assets/images/double-coins.svg';
import misteryCard from '../../assets/images/mistery-card.svg';
import buyButton from '../../assets/images/buy-button.svg';

import * as S from './styles';

// import { bffapi } from '../../services/bffapi';
// import { useUser } from '../../providers/UserProvider';

const data = [
  {
    name: 'points',
    title: '2XPz',
    description:
      'ESTE ITEM IRÁ GARANTIR QUE VOCÊ RECEBA DUAS VEZES MAIS PONTOS DURANTE TODAS AS PARTIDAS QUE VOCÊ REALIZAR APÓS A COMPRA. ISSO IRÁ INFLUENCIAR A SUA PONTUAÇÃO NO RANKING.',
    price: '35 REAIS',
  },
  {
    name: 'coins',
    title: '2XCz',
    description:
      'ESTE ITEM IRÁ GARANTIR QUE VOCÊ RECEBA DUAS VEZES MAIS MOEDAS DURANTE TODAS AS PARTIDAS QUE VOCÊ REALIZAR APÓS A COMPRA.',
    price: '50 REAIS',
  },
];

const Store = () => {
  const playerName = localStorage.getItem('@droplingo:name');
  const navigateTo = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [card, setCard] = useState('');

  const selectedCard = data.find((c) => c.name === card);

  return (
    <GameTemplate>
      <S.BackButton
        src={backButton}
        onClick={() => {
          navigateTo(-1);
        }}
      />
      <S.CategoriesTitle src={categoriesTitle} />
      <S.CategoriesSection src={categoriesSection} />
      <S.StoreTitle src={storeTitle} />
      <S.StoreBackground src={storeBackground} />

      <S.DoublePoints src={doublePoints} onClick={() => setCard('points')} />
      <S.DoubleCoins src={doubleCoins} onClick={() => setCard('coins')} />
      <S.MisteryCard src={misteryCard} />

      {selectedCard ? (
        <S.CardDetails isSelected>
          <S.Title>{selectedCard.title}</S.Title>
          <S.Description>{selectedCard.description}</S.Description>
          <S.Bottom>
            <S.PriceText>
              PREÇO:
              <S.Price>{selectedCard.price}</S.Price>
            </S.PriceText>
            <S.BuyButton src={buyButton} onClick={() => setOpenModal(true)} />
          </S.Bottom>
        </S.CardDetails>
      ) : (
        <S.CardDetails isSelected={false}>
          SELECIONE UM ITEM PARA VISUALIZA-LO
        </S.CardDetails>
      )}

      <Modal
        title="QUASE LÁ!"
        message="VOCÊ ESTÁ PRESTES A ADQUIRIR UM NOVO ITEM. TEM CERTEZA QUE DESEJA CONTINUAR?"
        type="store"
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </GameTemplate>
  );
};

export default Store;
