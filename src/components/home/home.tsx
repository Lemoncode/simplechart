import * as React from 'react';
import Link from 'next/link';
import { Map } from './viewModel';
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
          href={map.url}
        >
          <a>{map.title}</a>
        </Link>
      ))
    }
  </div>
);
