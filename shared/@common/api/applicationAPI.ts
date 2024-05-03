import { axiosInstance } from '@/shared/@common/api/axiosInstance';

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
  getApplicationData: (user_id: string, offset?: number, limit?: number) => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
    return axiosInstance.get(`/users/${user_id}/applications`, {
      headers,
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
  put: <T>(
    shop_id: string,
    notice_id: string,
    application_id: string,
    status: T,
  ) => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
    const body = { status: status };
    return axiosInstance.put(
      `/shops/${shop_id}/notices/${notice_id}/applications/${application_id}`,
      body,
      { headers },
    );
  },
};

export default applicationAPI;
