import * as React from 'react';
import { FeatureCollection, GeometryObject, MultiLineString } from 'geojson';
import { ElectoralVote } from './viewModel';
import { getGeoEntities, geoAreaTypes, getMesh } from '../../common/geo/spain';
import { ElectoralMapComponent } from './electoralMap';
import { mapElectoralVotesModelToVM } from './mapper';

interface State {
  electoralVotes: ElectoralVote[];
  geoEntities: FeatureCollection<GeometryObject, any>;
  mesh: MultiLineString;
}

export class ElectoralMapContainer extends React.PureComponent<{}, State> {
  state = {
    electoralVotes: [],
    geoEntities: null,
    mesh: null,
  };

  componentDidMount() {
    this.loadMapData();
  }

  loadMapData = async () => {
    const electoralVoteEntities = await require('../../map-data/spain/0001_spain2016MunicipalitiesElectoralVotes.json');

    this.setState({
      electoralVotes: mapElectoralVotesModelToVM(electoralVoteEntities),
      geoEntities: getGeoEntities(geoAreaTypes.municipalities),
      mesh: getMesh(geoAreaTypes.municipalities),
    });
  }

  render() {
    return (
      <ElectoralMapComponent
        electoralVoteEntities={this.state.electoralVotes}
        geoEntities={this.state.geoEntities}
        mesh={this.state.mesh}
      />
    );
  }
}
