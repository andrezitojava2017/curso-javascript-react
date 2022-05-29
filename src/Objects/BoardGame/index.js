import CardFrontBack from '../../components/CardFrontBack';
import './style.css';

function BoardGame(amountCard) {
  const $boardCardFontBack = CardFrontBack().repeat(amountCard);

  return `
    <section class="board-game">
      ${$boardCardFontBack}
    </section>
  `;
}

export default BoardGame;
