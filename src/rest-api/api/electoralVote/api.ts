import { FetchSpain2016MunicipalitiesElectoralVotes } from './contract';
import { get } from '../createRequest';
import { urls } from './urls';

export const fetchSpain2016MunicipalitiesElectoralVotes: FetchSpain2016MunicipalitiesElectoralVotes = () => (
  get(urls.fetchMaps)
);
