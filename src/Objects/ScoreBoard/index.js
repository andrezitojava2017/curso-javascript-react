import PlayerName from '../../components/PlayerName';
import './style.css';
function ScoreBoard() {
  return `
  <header class="score-board">
  ${PlayerName('JOGARDOR 1')}
  ${PlayerName('JOGARDOR 2')}
  </header>
  `;
}

export default ScoreBoard;
