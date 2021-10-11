import axios from 'axios';

export const reqIntercept = async () =>
  await axios.interceptors.request.use((req) => {
    console.log(`${JSON.stringify(req, null, 2)}`);
    return req;
  });

export const resIntercept = async () =>
  await axios.interceptors.response.use((res) => {
    console.log(res.data);
    return res;
  });
