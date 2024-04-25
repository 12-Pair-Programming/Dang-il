import { axiosInstance } from '@/shared/utils/axiosInstance';

const userAPI = {
  getUserData: async (user_id: string) => {
    const data = await axiosInstance.get(`/users/${user_id}`);
    return data.data;
  },
  post: async <T>(user_id: T, body: T) => {
    const data = await axiosInstance.post(`/users/${user_id}`, body);
    return data.data;
  },
  put: async <T>(user_id: T, body: T) => {
    const data = await axiosInstance.put(`/users/${user_id}`, body);
    return data.data;
  },
};

export default userAPI;
