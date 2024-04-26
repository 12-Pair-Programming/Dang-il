import axios from 'axios';

// 저희 item에 데이터 객체가 없어서 우선 '0-1'로 URL설정했습니다.

export const axiosInstance = axios.create({
  baseURL: 'https://bootcamp-api.codeit.kr/api/0-1/the-julge',
});
