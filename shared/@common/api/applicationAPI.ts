import { axiosInstance } from '@/shared/utils/axiosInstance';

interface ApplicationListData {
  shop_id: string;
  notice_id: string;
  offset: number;
  limit: number;
}

interface ApplicationData {
  user_id: string;
  offset: number;
  limit: number;
}

const applicationAPI = {
  getApplicationListData: async ({
    shop_id,
    notice_id,
    offset,
    limit,
  }: ApplicationListData) => {
    const params = { offset, limit };
    const data = await axiosInstance.get(
      `/shops/${shop_id}/notices/${notice_id}/applications`,
      { params },
    );
    return data.data;
  },
  getApplicationData: async ({ user_id, offset, limit }: ApplicationData) => {
    const params = { offset, limit };
    const data = await axiosInstance.get(`/users/${user_id}/applications`, {
      params,
    });
    return data.data;
  },
  post: async <T>(shop_id: T, notice_id: T, body: T) => {
    const data = await axiosInstance.post(
      `/shops/${shop_id}/notices/${notice_id}/applications`,
      body,
    );
    return data.data;
  },
  put: async <T>(shop_id: T, notice_id: T, application_id: T, body: T) => {
    const data = await axiosInstance.put(
      `/shops/${shop_id}/notices/${notice_id}/applications/${application_id}`,
      body,
    );
    return data.data;
  },
};

export default applicationAPI;
