import './style.css';
import display from './modules/displayScore.js';
import setAPI from './modules/setAPI.js';
import getAPI from './modules/getAPI.js';

// adding the score

const form = document.querySelector('.form-scores');
const refreshButton = document.querySelector('.refresh-button');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const userName = document.querySelector('.name');
  const userScores = document.querySelector('.score');
  const score = {
    user: userName.value,
    score: userScores.value,
  };
  userName.value = '';
  userScores.value = '';
  await setAPI(score);
});

const getScore = async () => {
  const scores = await getAPI();
  display(scores);
};
refreshButton.addEventListener('click', async () => {
  getScore();
});
getScore();
