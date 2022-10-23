import axiosClient from './AxiosClient';

const generate = async (url: string) => {
  return await axiosClient
    .post('/generate', { url })
    .catch((e) => console.error(e));
};

const api = {
  generate
};

export default api;
