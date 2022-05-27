import CardGame from '../../components/CardGame';
import './style.css';

function BoardGame(amountCard) {
  const $boardGame = CardGame().repeat(amountCard);
  return `

    <section class="board-game">
      ${$boardGame}
    </section>
  `;
}

export default BoardGame;
