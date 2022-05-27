import './style.css';
import './src/styles/generic/reset.css';
import './src/styles/settings/colors.css';
import './src/styles/elements/base.css';
import BoardGame from './src/Objects/BoardGame';
import PlayerName from './src/components/PlayerName';

const $root = document.querySelector('#root');

$root.insertAdjacentHTML(
  'beforeend',
  `
${PlayerName('JOGARDOR 1')}
${PlayerName('JOGARDOR 2')}
${BoardGame(6)}`
);
