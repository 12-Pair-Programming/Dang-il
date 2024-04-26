import { axiosInstance } from '@/shared/utils/axiosInstance';

const authenticationAPI = {
  post: <T>(body: T) => {
    return axiosInstance.post(`/token`, body);
  },
};

export default authenticationAPI;
