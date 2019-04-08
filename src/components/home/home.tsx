import * as React from 'react';
import Link from 'next/link';
import { Map } from './viewModel';
import MapPageContainer from '../mapPage';
import { routes } from '../../common/constants/routes';
const styles = require('./home.scss');

interface Props {
  maps: Map[];
}

export const Home: React.StatelessComponent<Props> = (props) => (
  <div className={styles.home}>
    {
      props.maps.map((map) => (
        <Link
          key={map.id}
          href={routes.mapPageLayout}
        >
          <a>{map.title}</a>
        </Link>
      ))
    }
   
  </div>
);
