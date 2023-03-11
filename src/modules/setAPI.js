const setAPI = async (scores) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wveBq7mKdYSDJHfsMbPL/scores/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(scores),
  });
  const result = await response.json();
  return result;
};
export default setAPI;