import { axiosInstance } from '@/shared/utils/axiosInstance';

const shopAPI = {
  get: (shop_id: string) => {
    return axiosInstance.get(`/shops/${shop_id}`);
  },
  post: <T>(body: T) => {
    return axiosInstance.post(`/shops`, body);
  },
  put: <T>(shop_id: string, body: T) => {
    return axiosInstance.put(`/shops/${shop_id}`, body);
  },
};

export default shopAPI;
