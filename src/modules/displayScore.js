// display the score
export default (arr) => {
  const scores = document.querySelector('.scores');
  scores.innerHTML = '';
  arr.result.forEach((item) => {
    const li = document.createElement('p');
    li.innerHTML = `${item.user}: ${item.score}`;
    scores.appendChild(li);
  });
};