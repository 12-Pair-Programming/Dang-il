import { axiosInstance } from '@/shared/utils/axiosInstance';

interface GetAlertData {
  user_id: string;
  offset: number;
  limit: number;
}

const alertAPI = {
  get: ({ user_id, offset, limit }: GetAlertData) => {
    const params = {
      offset,
      limit,
    };
    return axiosInstance.get(`/users/${user_id}`, { params });
  },
  put: <T>(user_id: T, alert_id: T, body: T) => {
    return axiosInstance.put(`/users/${user_id}/alerts/${alert_id}`, body);
  },
};

export default alertAPI;
