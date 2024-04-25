import axios from 'axios';
import useFetch from '@/shared/@common/api/hooks/useFetch';

export const axiosInstance = axios.create({
  baseURL: 'https://bootcamp-api.codeit.kr/api/0-1/the-julge',
});

// export const applicationAPI = {
//   get: async (
//     shop_id: string,
//     notice_id: string,
//     offset: number,
//     limit: number,
//   ) => {
//     const params = { offset, limit };
//     const data = await tableTest.get(
//       `/shops/${shop_id}/notices/${notice_id}/applications`,
//       { params },
//     );
//     return data.data.items.map((v) => v.item.user.item);
//   },
// };

export const useGetApplicationData = () => {
  // const shop_id = '804af1cf-06a0-49fc-9c5f-179f867217fc';
  // const notice_id = '904fd6d7-e97b-4bee-a43d-1230204e78db';
  // const offset = 0;
  // const limit = 5;

  const getApplicationData = () =>
    axiosInstance.get(
      '/shops/804af1cf-06a0-49fc-9c5f-179f867217fc/notices/904fd6d7-e97b-4bee-a43d-1230204e78db/applications',
    );
  const { data, loading, error, execute } = useFetch(getApplicationData);
  return { loading, error, data, execute };
};
