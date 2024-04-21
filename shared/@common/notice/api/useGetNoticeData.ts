import useFetch from '@/shared/@common/api/hooks/useFetch';
import { axiosInstance } from '@/shared/utils/axiosInstance';

const useGetNoticeData = () => {
  const getNoticeData = () => axiosInstance.get('/notices');
  const { data, loading, error, execute } = useFetch(getNoticeData);

  return { loading, error, data, execute };
};

export default useGetNoticeData;
