import React, { useEffect } from 'react';
import useFetch from '@/shared/@common/api/hooks/useFetch';
import API from '../utils/axiosInstance';

const fetchNoticeData = async () => {
  try {
    const res = await API.get('/notices');
    return res.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default fetchNoticeData;
