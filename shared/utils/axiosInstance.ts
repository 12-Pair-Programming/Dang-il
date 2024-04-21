import axios from 'axios';

// 저희 item에 데이터 객체가 없어서 우선 '0-1'로 URL설정했습니다.

export const axiosInstance = axios.create({
  baseURL: 'https://bootcamp-api.codeit.kr/api/0-1/the-julge',
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
