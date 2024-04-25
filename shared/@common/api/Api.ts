import axios from 'axios';

interface getShopNoticeListProps {
  shops_id: string;
  offset?: number;
  limit?: number;
}

interface getshopNotice {
  shops_id: string;
  notice_id: string;
}

interface getNoticeListProps {
  offset?: number;
  limit?: number;
  address?: string;
  keyword?: string;
  startsAtGte?: string;
  hourlyPayGte?: number;
  sort?: string;
}

export const axiosInstance = axios.create({
  baseURL: 'https://bootcamp-api.codeit.kr/api/0-1/the-julge',
});

//서인님의 api가 올 끼지 임시입니다.!
//noticeAPI.getNoticeList(offset,limit,address,keyword,startsAtGte,hourlyPayGte,sort);
// 변수는 최소화 // interface와 noticeAPI 함께 파일로 분리
export const noticeAPI = {
  getNoticeList: async ({
    offset,
    limit,
    address,
    keyword,
    startsAtGte,
    hourlyPayGte,
    sort,
  }: getNoticeListProps) => {
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
    console.log(data.data.items[0].item.shop.item.name);
    const shopName = data.data.items[0].item.shop.item.name;
    console.log('가게이름: ' + shopName);
    return data;
  },
  getShopNoticeList: async ({
    shops_id,
    offset,
    limit,
  }: getShopNoticeListProps) => {
    const params = {
      offset,
      limit,
    };
    const data = await axiosInstance.get(`/shops/${shops_id}/notices`, {
      params,
    });
    return data.data;
  },

  getshopNotice: async ({ shops_id, notice_id }: getshopNotice) => {
    const data = await axiosInstance.get(
      `/shops/${shops_id}/notices/${notice_id}`,
    );
    return data.data;
  },
  post: async <T>(shops_id, body: T) => {
    const data = await axiosInstance.post(`/shops/${shops_id}/notices`, body);
    return data.data;
  },
  put: async <T>(shop_id, notice_id, body: T) => {
    const data = await axiosInstance.put(
      `/shops/${shop_id}/notices/${notice_id}`,
      body,
    );
    return data.data;
  },
};

const shopAPI = {
  get: async (shop_id: string) => {
    const data = await axiosInstance.get(`/shops/${shop_id}`);
    return data.data;
  },
  post: async <T>(body: T) => {
    const data = await axiosInstance.post(`/shops`, body);
    return data.data;
  },
  put: async <T>(shop_id, body: T) => {
    const data = await axiosInstance.put(`/shops/${shop_id}`, body);
    return data.data;
  },
};

const applicationAPI = {
  get: async (shop_id, notice_id, offset, limit) => {
    const params = { offset, limit };
    const data = await axiosInstance.get(
      `/shops/${shop_id}/notices/${notice_id}/applications`,
      { params },
    );
    return data.data;
  },
  get: async (user_id, offset, limit) => {
    const params = { offset, limit };
    const data = await axiosInstance.get(`/users/${user_id}/applications`, {
      params,
    });
    return data.data;
  },
  post: async <T>(shop_id, notice_id, body: T) => {
    const data = await axiosInstance.post(
      `/shops/${shop_id}/notices/${notice_id}/applications`,
      body,
    );
    return data.data;
  },
  put: async <T>(shop_id, notice_id, application_id, body: T) => {
    const data = await axiosInstance.put(
      `/shops/${shop_id}/notices/${notice_id}/applications/${application_id}`,
      body,
    );
    return data.data;
  },
};

const authenticationAPI = {
  post: async <T>(body: T) => {
    const data = await axiosInstance.post(`/token`, body);
    return data.data;
  },
};

const userAPI = {
  get: async (user_id) => {
    const data = await axiosInstance.get(`/users/${user_id}`);
    return data.data;
  },
  post: async <T>(user_id, body: T) => {
    const data = await axiosInstance.post(`/users/${user_id}`, body);
    return data.data;
  },
  put: async <T>(user_id, body: T) => {
    const data = await axiosInstance.put(`/users/${user_id}`, body);
    return data.data;
  },
};

export const alertAPI = {
  get: async (
    user_id: string,
    token: string | null = localStorage.getItem('token'),
    offset?: number,
    limit?: number,
  ) => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const params = {
      offset,
      limit,
    };
    const data = await axiosInstance.get(`/users/${user_id}/alerts`, {
      params,
      headers,
    });
    return data;
  },
  put: async <T>(user_id, alert_id, body: T) => {
    const data = await axiosInstance.put(
      `/users/${user_id}/alerts/${alert_id}`,
      body,
    );
    return data.data;
  },
};

/*
alertAPI.get(url);
/images 1
/notices 1
/shops/{shop_id}/notices/ -7
/users/{user_id}/ 6
/token 1

image.post
    /images                                             body

noticeAPI.get 
    /notice                                             offset limit address keyword startsAtGte hourlyPayGte sort
    /shops/{shop_id}/notices                            offset shop_id limit
    /shops/{shop_id}/notices/{notice_id}                shop_id notice_id

noticeAPI.post
    /shops/{shops_id}/notices                           body

noticeAPI.put
    /shops/{shop_id}/notices/{notice_id}                

shopAPI.get 
    /shops/{shop_id}                                    shop_id

shopAPI.post 
    /shops/{shop_id}                                    shop_id

shopAPI.put 
    /shops/{shop_id}                                    shop_id

application.get 
    /shops/{shop_id}/notices/{notice_id}/applications   shop_id notice_id offset limit
    /users/{user_id}/applications                       user_id offset limit

application.post 
    /shops/{shop_id}/notices/{notice_id}/applications

application.put
    /shops/{shop_id}/notices/{notice_id}/applications/{application_id}

authenticationAPI.post
    /token

user.get   
    /users/{user_id}                                    user_id

user.post
    /users/{user_id}

user.put
    /users/{user_id}

alert.get
    /users/{user_id}/alerts                             user_id offset limit

alert.put
    /users/{user_id}/alerts/{alert_id}                  body

페이지 안에서 {shop_id}를 직접 넣어주는 형식(각 카드 같은 친구들을 누를 때 서로 다른 요청을 보내야하니까)
url /sdasd/asd/w/d/d/{shop_id}/sdas
*/
