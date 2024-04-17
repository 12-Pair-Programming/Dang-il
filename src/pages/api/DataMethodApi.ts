import axios from 'axios';

const BASE_URL = 'https://bootcamp-api.codeit.kr/api/4-16/the-julge';

export async function fetchDatas(endpoint: string | number) {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    throw new Error('HTTP error! status: ${error.response.status}');
  }
}