import { mutate } from 'swr';
import axios from 'axios';

export function fetcher(path) {
  return axios
    .get(path)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.error(err);
      return Promise.reject(err);
    });
}

export async function fetchAndCache(path) {
  const request = await fetcher(path);
  mutate(path, request, false);
  return request;
}