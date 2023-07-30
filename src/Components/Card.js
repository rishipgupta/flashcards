
const Card = ({ selectedId, setSelectedId, question, answer, cardId }) => {

  const handleClick = (id) => {
    setSelectedId(id);
  }

  return (
    <div onClick={() => handleClick(cardId)} className={cardId === selectedId ? 'selected' : ''}>
      {cardId === selectedId ? answer : question}
    </div>
  )
}

export default Card
