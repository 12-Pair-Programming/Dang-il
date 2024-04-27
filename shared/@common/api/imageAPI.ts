import axios from 'axios';

const imageAPI = async (fileObject: string) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('User token not found');
    }

    // 서버에 파일 이름을 전송하여 사전에 서명된 URL을 요청합니다.
    const response = await axios.post(
      'https://bootcamp-api.codeit.kr/api/0-1/the-julge/images',
      {
        name: fileObject,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );

    const { item } = response.data;

    // S3에 이미지를 업로드합니다.
    const imageUrl = item.url;
    const imageData = fileObject;
    await axios.put(imageUrl, imageData, {
      headers: {
        'Content-Type': 'image/jpeg', // 이미지 파일 형식에 맞게 변경
      },
    });

    // 업로드된 이미지의 URL에서 쿼리 문자열을 제거하여 반환합니다.
    const instanceUrl = new URL(imageUrl);
    const urlWithoutQueryString = instanceUrl.origin + instanceUrl.pathname;

    return urlWithoutQueryString;
  } catch (error) {
    console.error(
      'Error uploading image to S3 or creating presigned URL:',
      error,
    );
    throw error;
  }
};

export default imageAPI;
