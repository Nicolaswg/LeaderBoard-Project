import Score from './scores.js';

const AddScore = () => {
  const name = document.getElementById('name');
  const score = document.getElementById('score');
  const index = Score.scoreList.length + 1;
  if (name.value === '' || score.value === '') {
    return null;
  }
  const newList = new Score(name.value, score.value, index);
  Score.scoreList.push(newList);
  name.value = '';
  score.value = '';
  return Score.scoreList.length;
};

const Render = () => {
  const leaderBox = document.querySelector('.leaderboard-box');
  if (Score.scoreList.length === 0) {
    leaderBox.innerHTML = 'No new Score Added';
  } else {
    let html = '';
    Score.scoreList.forEach((score) => {
      html += `<li class="score"><p class="name">${score.name}: ${score.score}</p></li>`;
    });
    leaderBox.innerHTML = html;
  }
  return Score.scoreList.length;
};

export { AddScore, Render };
