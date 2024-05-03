const uploadImageToS3 = async (url: string, fileObject: File) => {
  await fetch(url, {
    method: 'PUT',
    body: fileObject,
  });
};

const imageAPI = async (
  fileObject: File,
  token = localStorage.getItem('token'),
) => {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/0-1/the-julge/images`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name: fileObject.name }),
    },
  );
  const result = await response.json();

  await uploadImageToS3(result.item.url, fileObject);

  const instanceUrl = new URL(result.item.url);
  const urlWithoutQueryString = instanceUrl.origin + instanceUrl.pathname;
  return urlWithoutQueryString;
};

export default imageAPI;
