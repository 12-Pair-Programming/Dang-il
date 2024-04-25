import { axiosInstance } from '@/shared/utils/axiosInstance';

interface GetNoticeListData {
  offset?: number;
  limit?: number;
  address?: string;
  keyword?: string;
  startsAtGte?: string;
  hourlyPayGte?: number;
  sort?: string;
}

interface GetShopNoticeListData {
  shops_id: string;
  offset?: number;
  limit?: number;
}

interface GetShopNoticeData {
  shops_id: string;
  notice_id: string;
}

const noticeAPI = {
  getNoticeList: async ({
    offset,
    limit,
    address,
    keyword,
    startsAtGte,
    hourlyPayGte,
    sort,
  }: GetNoticeListData) => {
    const params = {
      offset,
      limit,
      address,
      keyword,
      startsAtGte,
      hourlyPayGte,
      sort,
    };
    const data = await axiosInstance.get(`/notices`, { params });
    return data.data;
  },
  getShopNoticeList: async ({
    shops_id,
    offset,
    limit,
  }: GetShopNoticeListData) => {
    const params = {
      offset,
      limit,
    };
    const data = await axiosInstance.get(`/shops/${shops_id}/notices`, {
      params,
    });
    return data.data;
  },

  getShopNotice: async ({ shops_id, notice_id }: GetShopNoticeData) => {
    const data = await axiosInstance.get(
      `/shops/${shops_id}/notices/${notice_id}`,
    );
    return data.data;
  },
  post: async <T>(shop_id: T, body: T) => {
    const data = await axiosInstance.post<T>(`/shops/${shop_id}/notices`, body);
    return data.data;
  },
  put: async <T>(shop_id: T, notice_id: T, body: T) => {
    const data = await axiosInstance.put(
      `/shops/${shop_id}/notices/${notice_id}`,
      body,
    );
    return data.data;
  },
};

export default noticeAPI;
