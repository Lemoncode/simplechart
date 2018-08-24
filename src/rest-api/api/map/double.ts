import { FetchMaps } from './contract';
import { maps } from './mockData';

export const fetchMaps: FetchMaps = () => (
  Promise.resolve(maps)
);
