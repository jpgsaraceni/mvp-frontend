import React from 'react';
import { MouseEventHandler } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import * as S from './styles';

type Props = {
  className?: string;
  id: string;
  imageFront: string;
  imageBack: string;
  index: number;
  acceptDropId: string;
  unlockIconId: string;
  onPointerDown: MouseEventHandler
};

const FlipCard = ({ className, id, imageFront, imageBack, index, onPointerDown }: Props) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <S.FlipBox
          className={className}
          ref={provided.innerRef}
          onPointerDown={onPointerDown}
          onDragEnd={() => console.log('isDraggingOver')}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <S.FlipBoxInner>
            <S.FlipBoxFront src={imageFront} />
            <S.FlipBoxBack src={imageBack} />
          </S.FlipBoxInner>
        </S.FlipBox>
      )}
    </Draggable>
  );
};

export default FlipCard;
