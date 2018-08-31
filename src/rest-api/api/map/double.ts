import { FetchMaps, FetchMapById } from './contract';
import { maps } from './mockData';

export const fetchMaps: FetchMaps = () => (
  Promise.resolve(maps)
);

export const fetchMapById: FetchMapById = (id: number) => (
  Promise.resolve(maps.find((m) => m.id === id))
);
