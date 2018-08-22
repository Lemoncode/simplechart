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
