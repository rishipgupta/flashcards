import React from 'react';
import Card from './Card';
import { cardData } from '../data'
import { useState } from 'react';

const Flashcards = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className='flashcards'>
      {cardData.map((card) => <Card
        question={card.question}
        answer={card.answer}
        key={card.id}
        cardId={card.id}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />)
      }
    </div>
  )
}

export default Flashcards
