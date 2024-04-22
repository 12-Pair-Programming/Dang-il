import useFetch from '@/shared/@common/api/hooks/useFetch';
import { axiosInstance } from '@/shared/utils/axiosInstance';

const useTableData = () => {
  const getTableData = () => axiosInstance.get('/notices');
  const { data, loading, error, execute } = useFetch(getTableData);

  return { loading, error, data, execute };
};

export default useTableData;