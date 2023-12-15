import axios from "axios";
const apiKey = "b59b6be1ce034ea39cfbeb911cf683d7";

const topGamesCurrentYear = `https://api.rawg.io/api/games?key=${apiKey}&dates=2023-01-01,2023-12-13&ordering=-rating`;
const mostAnticipated = `https://api.rawg.io/api/games?key=${apiKey}&dates=2023-12-30,2024-12-30&ordering=-added`;
const actionEndpoint = `https://api.rawg.io/api/games?key=${apiKey}&genres=action`;
const indieEndpoint = `https://api.rawg.io/api/games?key=${apiKey}&genres=indie`;
const mmoEndpoint = `https://api.rawg.io/api/games?key=${apiKey}&genres=massively-multiplayer`;
const rpgEndpoint = `https://api.rawg.io/api/games?key=${apiKey}&genres=role-playing-games-rpg`;
const searchEndpoint = `https://api.rawg.io/api/games?key=${apiKey}&search=303%20squadron&search_precise=true`;

const gameEndpoint = (id) =>
  `https://api.rawg.io/api/games/${id}?key=${apiKey}`;

const apiCall = async (endpoint, params) => {
  const options = {
    method: "GET",
    url: endpoint,
    params: params ? params : {},
  };
  try {
    let response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const fetchTopGame = () => {
  return apiCall(topGamesCurrentYear);
};
export const fetchMostAnticipated = () => {
  return apiCall(mostAnticipated);
};
export const fetchActionGames = () => {
  return apiCall(actionEndpoint);
};
export const fetchIndieGames = () => {
  return apiCall(indieEndpoint);
};
export const fetchMmoGames = () => {
  return apiCall(mmoEndpoint);
};
export const fetchRpgGames = () => {
  return apiCall(rpgEndpoint);
};

export const fetchSearch = (searchTerm) => {
  const params = {
    search: searchTerm,
    search_precise: true,
  };
  return apiCall(searchEndpoint, params);
};
export const fetchGame = (id) => {
  return apiCall(gameEndpoint(id));
};
