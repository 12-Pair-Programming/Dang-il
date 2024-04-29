import { axiosInstance } from '@/shared/utils/axiosInstance';

interface ApplicationListData {
  shop_id: string;
  notice_id: string;
  offset?: number;
  limit?: number;
}

interface ApplicationData {
  user_id: string;
  offset?: number;
  limit?: number;
}

const applicationAPI = {
  getApplicationListData: ({
    shop_id,
    notice_id,
    offset,
    limit,
  }: ApplicationListData) => {
    const params = { offset, limit };
    return axiosInstance.get(
      `/shops/${shop_id}/notices/${notice_id}/applications`,
      { params },
    );
  },
  getApplicationData: ({ user_id, offset, limit }: ApplicationData) => {
    const params = { offset, limit };
    return axiosInstance.get(`/users/${user_id}/applications`, {
      params,
    });
    return axiosInstance.get(`/users/${user_id}/applications`, {
      params,
    });
  },
  post: <T>(shop_id: string, notice_id: string, body: T) => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
    return axiosInstance.post(
      `/shops/${shop_id}/notices/${notice_id}/applications`,
      body,
      { headers },
    );
  },
  put: <T>(shop_id: string, notice_id: string, application_id: T, body: T) => {
    return axiosInstance.put(
      `/shops/${shop_id}/notices/${notice_id}/applications/${application_id}`,
      body,
    );
  },
};

export default applicationAPI;
