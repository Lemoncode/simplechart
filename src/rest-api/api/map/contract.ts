import { Map } from '../../model';

export type FetchMaps = () => Promise<Map[]>;
export type FetchMapById = (id: number) => Promise<Map>;
