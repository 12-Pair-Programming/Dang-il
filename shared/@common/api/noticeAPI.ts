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
  getNoticeList: ({
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
    return axiosInstance.get(`/notices`, { params });
  },
  getShopNoticeList: ({ shops_id, offset, limit }: GetShopNoticeListData) => {
    const params = {
      offset,
      limit,
    };
    return axiosInstance.get(`/shops/${shops_id}/notices`, {
      params,
    });
  },

  getShopNotice: ({ shops_id, notice_id }: GetShopNoticeData) => {
    return axiosInstance.get(`/shops/${shops_id}/notices/${notice_id}`);
  },
  post: <T>(shop_id: string, body: T) => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
    return axiosInstance.post<T>(`/shops/${shop_id}/notices`, body, {
      headers,
    });
  },
  put: <T>(shop_id: string, notice_id: T, body: T) => {
    return axiosInstance.put(`/shops/${shop_id}/notices/${notice_id}`, body);
  },
};

export default noticeAPI;
