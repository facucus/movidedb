import axios from "axios";

const BASE_URI = "https://api.themoviedb.org/3";
const IMAGE_BASE_URI = "https://image.tmdb.org/t/p";

const API_KEY = process.env.REACT_APP_API_KEY;

const fetchWithErrorHandling = async (url) => {
  try {
    return await axios(url);
  } catch (err) {
    const { status_code } = err.response.data;
    if (status_code === 7) return { error: "Please, provide a valid API_KEY" };
    return { error: "The resource you requested could not be found." };
  }
};

export const getDiscoveryApi = async () =>
  fetchWithErrorHandling(`${BASE_URI}/discover/movie?api_key=${API_KEY}`);

export const getMovieDetailsApi = async (id) =>
  fetchWithErrorHandling(`${BASE_URI}/movie/${id}?api_key=${API_KEY}`);

export const getSearchApi = async (query) =>
  fetchWithErrorHandling(
    `${BASE_URI}/search/movie?api_key=${API_KEY}&query=${query}`
  );

export const getImageSrc = (path, size) =>
  `${IMAGE_BASE_URI}/${size ? `w${size}` : "original"}${path}`;
