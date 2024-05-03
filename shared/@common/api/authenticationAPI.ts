import { axiosInstance } from '@/shared/@common/api/axiosInstance';

const authenticationAPI = {
  post: <T>(body: T) => {
    return axiosInstance.post(`/token`, body);
  },
};

export default authenticationAPI;
