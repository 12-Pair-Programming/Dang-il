import API from '@/shared/utils/axiosInstance';
import { AxiosRequestConfig } from 'axios';

export interface NoticeData extends AxiosRequestConfig {
  offset: number;
  limit: number;
  address: [];
  count: number;
  hasNext: boolean;
  items: [];
}

const fetchNoticeData = async () => {
  try {
    const responseData = await API.get('/notices');
    console.log(responseData);
    return responseData;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default fetchNoticeData;
