import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://bootcamp-api.codeit.kr/api/4-16/the-julge',
});

const API = {
  get: async (url: string) => {
    const data = await axiosInstance.get(url);
    return data.data;
  },
  post: async <T>(url: string, body: T) => {
    const data = await axiosInstance.post(url, body);
    return data.data;
  },
};

export default API;
