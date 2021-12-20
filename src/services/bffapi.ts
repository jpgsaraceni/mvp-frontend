import axios from 'axios';

export const bffapi = axios.create({
  baseURL: 'http://localhost:7000/',
});
