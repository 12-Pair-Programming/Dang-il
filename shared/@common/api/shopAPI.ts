import { axiosInstance } from '@/shared/utils/axiosInstance';

const shopAPI = {
  get: (shop_id: string) => {
    return axiosInstance.get(`/shops/${shop_id}`);
  },
  post: <T>(shop_id: string, body: T) => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
    return axiosInstance.post(`/shops/${shop_id}`, body, { headers });
  },
  put: <T>(shop_id: string, body: T) => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
    console.log(localStorage.getItem('token'));
    return axiosInstance.put(`/shops/${shop_id}`, body, { headers });
  },
};

export default shopAPI;
