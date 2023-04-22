import axios from 'axios';
import { camelizeKeys } from 'humps';

export const getInstance = (
  baseURL = 'https://api.example.com',
  headers = {
    'Content-Type': 'application/json',
  },
  ...rest: any
) => {
  return axios.create({
    baseURL,
    headers,
    ...rest,
  });
};

getInstance().interceptors.response.use((response) => {
  response.data = camelizeKeys(response.data);
  return response;
});
