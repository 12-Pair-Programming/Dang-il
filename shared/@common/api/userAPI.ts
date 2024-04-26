import { axiosInstance } from '@/shared/utils/axiosInstance';

const userAPI = {
  getUserData: (user_id: string) => {
    return axiosInstance.get(`/users/${user_id}`);
  },
  post: <T>(body: T) => {
    return axiosInstance.post(`/users`, body);
  },
  put: <T>(user_id: string, body: T) => {
    return axiosInstance.put(`/users/${user_id}`, body);
  },
};

export default userAPI;
