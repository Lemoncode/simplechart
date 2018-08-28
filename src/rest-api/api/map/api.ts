import { FetchMaps } from './contract';
import { get } from '../createRequest';
import { urls } from './urls';

export const fetchMaps: FetchMaps = () => (
  get(urls.fetchMaps)
);
