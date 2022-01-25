import './style.css';
import { AddScore, Render } from './modules/addScore.js';

const submitBtn = document.querySelector('.submit');

Render();

submitBtn.addEventListener('click', () => {
  AddScore();
  Render();
});
