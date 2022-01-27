import './style.css';
import { CreateApiGame, NewScore, DisplayScore } from './modules/api.js';

const submitBtn = document.querySelector('.submit');
const refreshBtn = document.querySelector('.refresh');
CreateApiGame();
submitBtn.addEventListener('click', () => {
  NewScore();
});

refreshBtn.addEventListener('click', () => {
  DisplayScore();
});
