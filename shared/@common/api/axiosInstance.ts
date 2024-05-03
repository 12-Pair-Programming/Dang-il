import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://bootcamp-api.codeit.kr/api/4-12/the-julge',
});
