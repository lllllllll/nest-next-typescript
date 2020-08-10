import useSWR from 'swr';
import { fetcher, fetchAndCache } from './_fetchAndCache';

const path = 'http://localhost:3010/users';

export function useUsers() {
  return useSWR(path, fetcher);
}

export function getUsers() {
  return fetchAndCache(path);
}