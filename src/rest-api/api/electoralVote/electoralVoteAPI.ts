import { ElectoralVote } from '../../model';

const spain2016MunicipalitiesElectoralVotes: any[] = require('./spain/spain2016MunicipalitiesElectoralVotes.json');

const fetchSpain2016MunicipalitiesElectoralVotes = (): Promise<ElectoralVote[]> => (
  Promise.resolve(spain2016MunicipalitiesElectoralVotes)
);

export const electoralVoteAPI = {
  fetchSpain2016MunicipalitiesElectoralVotes,
};
