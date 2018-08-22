import * as React from 'react';
import Link from 'next/link';
import { routes } from '../../common/constants/routes';
const styles = require('./home.scss');

export const Home: React.StatelessComponent = () => (
  <div className={styles.home}>
    <Link href={routes.spainMuniciaplitiesElectoralMap2016}>
      <a>Mapa electoral municipios España 2016</a>
    </Link>
  </div>
);
