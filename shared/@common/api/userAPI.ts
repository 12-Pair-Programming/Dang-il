import { axiosInstance } from '@/shared/utils/axiosInstance';

const userAPI = {
  getUserData: (user_id: string) => {
    return axiosInstance.get(`/users/${user_id}`);
  },
  post: <T>(user_id: T, body: T) => {
    return axiosInstance.post(`/users/${user_id}`, body);
  },
  put: <T>(user_id: T, body: T) => {
    return axiosInstance.put(`/users/${user_id}`, body);
  },
};

export default userAPI;
