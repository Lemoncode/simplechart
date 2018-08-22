import * as React from 'react';
import { FeatureCollection, GeometryObject, MultiLineString } from 'geojson';
import { ElectoralVote } from './viewModel';
import { electoralVoteAPI } from '../../rest-api/api/electoralVote';
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
    electoralVoteAPI.fetchSpain2016MunicipalitiesElectoralVotes()
      .then((electoralVoteEntities) => {
        this.setState({
          electoralVotes: mapElectoralVotesModelToVM(electoralVoteEntities),
          geoEntities: getGeoEntities(geoAreaTypes.municipalities),
          mesh: getMesh(geoAreaTypes.municipalities),
        });
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
