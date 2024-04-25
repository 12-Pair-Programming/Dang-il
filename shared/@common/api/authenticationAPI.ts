import { axiosInstance } from '@/shared/utils/axiosInstance';

const authenticationAPI = {
  post: async <T>(body: T) => {
    const data = await axiosInstance.post(`/token`, body);
    return data.data;
  },
};

export default authenticationAPI;
