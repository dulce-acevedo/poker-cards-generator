import axiosClient from './AxiosClient';

const generate = async (url: string) => {
  return await axiosClient
    .post('/generate', { url })
    .catch((e) => console.error(e));
};

const fetchData = async (): Promise<string> => {
  return await axiosClient.get('').then((res) => res.data.exampleMessage);
};

const api = {
  generate,
  fetchData
};

export default api;
