import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://rocketmovies-api-fecs.onrender.com',
});
