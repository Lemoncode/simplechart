import { Map } from '../../model';
import { routes } from '../../../common/constants/routes';

export const maps: Map[] = [
  {
    id: 1,
    title: 'Resultado Elecciones Generales 2016 por municipios',
    type: 1,
    description: 'Resultados de las Elecciones Generales de 2016, por municipios',
    tags: [
      'elecciones',
      'nacionales',
      '2016',
      'municipios',
    ],
    url: routes.spainMunicipalitiesElectoralMap2016,
  },
];
