import { config } from '../config';
import * as api from './api';
import * as double from './double';

export const mapAPI = config.useRealAPI ?
  api :
  double;
