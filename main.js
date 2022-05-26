import './style.css';
import './src/styles/generic/reset.css';
import './src/styles/settings/colors.css';
import './src/styles/elements/base.css';
import CardGame from './src/components/CardGame';

const $htmlCardGamer = CardGame();
const $root = document.querySelector('#root');

$root.insertAdjacentHTML('beforeend', $htmlCardGamer);