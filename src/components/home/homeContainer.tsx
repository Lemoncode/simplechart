import * as React from 'react';
import * as Next from 'next';
import { Home } from './home';
import { Map } from './viewModel';
import { mapAPI } from '../../rest-api/api/map';
import { mapMapListModelToVM } from './mappers';

interface Props {
  maps: Map[];
}

export const HomeContainer: Next.NextStatelessComponent<Props> = (props) => (
  <Home
    maps={props.maps}
  />
);

HomeContainer.getInitialProps = async () => {
  const maps = await mapAPI.fetchMaps();
  return {
    maps: mapMapListModelToVM(maps),
  };
};
