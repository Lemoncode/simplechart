import { FetchMaps, FetchMapById } from './contract';
import { get } from '../createRequest';
import { urls } from './urls';

export const fetchMaps: FetchMaps = () => (
  get(urls.fetchMaps)
);

export const fetchMapById: FetchMapById = (id: number) => (
  get(urls.fetchMapById, { id })
);
