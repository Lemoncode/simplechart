import * as React from 'react';
import { Home } from './home';
import { Map } from './viewModel';
import { mapAPI } from '../../rest-api/api/map';
import { mapMapListModelToVM } from './mappers';


interface State {
  maps: Map[];
}

export class HomeContainer extends React.PureComponent<{}, State> {
  state = {
    maps: [],
  };

  componentDidMount() {
      mapAPI.fetchMaps()
      .then((maps) => {
        this.setState({
          maps: mapMapListModelToVM(maps),
        });
      }
    );
  }

  render() {
    return (
      <>
        <Home
          maps={this.state.maps}
        />
      </>
    );
  }
}
