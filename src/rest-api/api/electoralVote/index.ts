import { config } from '../config';
import * as api from './api';
import * as double from './double';

export const electoralVoteAPI = config.useRealAPI ?
  api :
  double;
