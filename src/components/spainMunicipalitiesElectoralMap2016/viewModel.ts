export interface ElectoralVote {
  id: string;
  name: string;
  region: string;
  province: string;
  party: string;
}

export const createEmptyElectoralVote = (): ElectoralVote => ({
  id: '',
  name: '',
  region: '',
  province: '',
  party: '',
});

export interface MapInfo {
  id: number;
  title: string;
  description: string;
}

export const createEmptyMapInfo = (): MapInfo => ({
  id: 0,
  title: '',
  description: '',
});
