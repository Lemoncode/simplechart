import { FetchSpain2016MunicipalitiesElectoralVotes } from './contract';

const mapData: any[] = require('../../../map-data/spain/0001_spain2016MunicipalitiesElectoralVotes.json');

export const fetchSpain2016MunicipalitiesElectoralVotes: FetchSpain2016MunicipalitiesElectoralVotes = () => (
  Promise.resolve(mapData)
);
