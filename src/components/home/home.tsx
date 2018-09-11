import * as React from 'react';
import Link from 'next/link';
import { Map } from './viewModel';
import { LoadingSpinnerComponent } from '../../common/spinner';
const styles = require('./home.scss');

interface Props {
  maps: Map[];
}

export const Home: React.StatelessComponent<Props> = (props) => {
  return(
  <>
      <div className={styles.loading}>
      <LoadingSpinnerComponent/>
      </div>
    <div className={styles.home}>
      {
        props.maps.map((map) => (
          <Link
            key={map.id}
            href={map.url}
          >
            <a>{map.title}</a>
          </Link>
        ))
      }
    </div>
  </>
);
};
