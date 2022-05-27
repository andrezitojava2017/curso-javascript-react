import CardGame from '../../components/CardGame';

function BoardGame(amountCard) {
  const $boardGame = CardGame().repeat(amountCard);
  return $boardGame;
}

export default BoardGame;
