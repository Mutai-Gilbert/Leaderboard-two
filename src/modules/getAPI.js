const getAPI = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wveBq7mKdYSDJHfsMbPL/scores/');
  const result = await response.json();
  return result;
};
export default getAPI;