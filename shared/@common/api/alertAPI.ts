import { axiosInstance } from '@/shared/utils/axiosInstance';

interface GetAlertData {
  user_id: string;
  token?: string | null;
  offset?: number;
  limit?: number;
}

const alertAPI = {
  get: ({
    user_id,
    token = localStorage.getItem('token'),
    offset,
    limit,
  }: GetAlertData) => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const params = {
      offset,
      limit,
    };
    return axiosInstance.get(`/users/${user_id}/alerts`, { params,headers,});
  },
  put: <T>(user_id: string, alert_id: string, body: T) => {
    return axiosInstance.put(`/users/${user_id}/alerts/${alert_id}`, body);
  },
};

export default alertAPI;
