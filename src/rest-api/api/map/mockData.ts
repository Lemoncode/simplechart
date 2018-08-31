import { Map } from '../../model';
import { routes } from '../../../common/constants/routes';

export const maps: Map[] = [
  {
    id: 1,
    title: 'Test title',
    type: 1,
    description: 'Test description',
    tags: [
      'tag1',
      'tag2',
      'tag3',
    ],
    url: routes.spainMunicipalitiesElectoralMap2016,
  },
];
