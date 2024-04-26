import { axiosInstance } from '@/shared/utils/axiosInstance';

const userAPI = {
  getUserData: (user_id: string) => {
    return axiosInstance.get(`/users/${user_id}`);
  },
  post: <T>(body: T) => {
    return axiosInstance.post(`/users`, body);
  },
  put: <T>(user_id: string, token = localStorage.getItem('token'), body: T) => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    console.log(headers);
    return axiosInstance.put(`/users/${user_id}`, body, { headers });
  },
};

export default userAPI;
