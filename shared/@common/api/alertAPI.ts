import { axiosInstance } from '@/shared/utils/axiosInstance';

interface GetAlertData {
  user_id: string;
  offset: number;
  limit: number;
}

const alertAPI = {
  get: async ({ user_id, offset, limit }: GetAlertData) => {
    const params = {
      offset,
      limit,
    };
    const data = await axiosInstance.get(`/users/${user_id}`, { params });
    return data.data;
  },
  put: async <T>(user_id: T, alert_id: T, body: T) => {
    const data = await axiosInstance.put(
      `/users/${user_id}/alerts/${alert_id}`,
      body,
    );
    return data.data;
  },
};

export default alertAPI;
