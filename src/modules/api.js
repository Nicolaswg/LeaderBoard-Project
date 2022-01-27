import Scores from './scores.js';

let id = '';
const CreateApiGame = async () => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'Nicolas Game',
    }),
  }).then((res) => res.json().then((data) => {
    id = data.result.slice(13, -6).trim();
  }));
};
const NewScore = async () => {
  const name = document.getElementById('name');
  const score = document.getElementById('score');
  const newScore = new Scores(name.value, score.value);
  await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newScore),
  }).then((res) => res.json().then((data) => data.resut));
  name.value = '';
  score.value = '';
};

const DisplayScore = async () => {
  await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`).then((res) => res.json().then((data) => {
    const box = document.querySelector('.leaderboard-box');
    box.innerHTML = '';
    let html = '';
    data.result.forEach((score) => {
      html += `<li class="score"><p class="name">${score.user}: ${score.score}</p></li>`;
    });
    box.innerHTML = html;
  }));
};
export { CreateApiGame, NewScore, DisplayScore };