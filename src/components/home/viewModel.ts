export interface Map {
  id: number;
  title: string;
  type: number;
  description: string;
  tags: string[];
  url: string;
}

export const createEmptyMap = (): Map => ({
  id: 0,
  title: '',
  type: 0,
  description: '',
  tags: [],
  url: '',
});
