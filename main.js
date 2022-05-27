import './style.css';
import './src/styles/generic/reset.css';
import './src/styles/settings/colors.css';
import './src/styles/elements/base.css';
import BoardGame from './src/Objects/BoardGame';

const $htmlBoardGame = BoardGame(6);

const $root = document.querySelector('#root');

$root.insertAdjacentHTML('beforeend', $htmlBoardGame);
