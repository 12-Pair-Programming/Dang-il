import { axiosInstance } from '@/shared/utils/axiosInstance';

const shopAPI = {
  get: async (shop_id: string) => {
    const data = await axiosInstance.get(`/shops/${shop_id}`);
    return data.data;
  },
  post: async <T>(body: T) => {
    const data = await axiosInstance.post(`/shops`, body);
    return data.data;
  },
  put: async <T>(shop_id: T, body: T) => {
    const data = await axiosInstance.put(`/shops/${shop_id}`, body);
    return data.data;
  },
};

export default shopAPI;
