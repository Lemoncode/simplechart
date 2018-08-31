import * as React from 'react';
import { FeatureCollection, GeometryObject, MultiLineString } from 'geojson';
import { ElectoralVote, MapInfo } from './viewModel';
import { getGeoEntities, geoAreaTypes, getMesh } from '../../common/geo/spain';
import { ElectoralMapComponent } from './electoralMap';
import { mapElectoralVotesModelToVM, mapMapInfoModelToVM } from './mapper';
import { mapAPI } from '../../rest-api/api/map';

const mapId = 1;

interface Props {
  mapInfo: MapInfo;
}

interface State {
  electoralVotes: ElectoralVote[];
  geoEntities: FeatureCollection<GeometryObject, any>;
  mesh: MultiLineString;
}

export class ElectoralMapContainer extends React.PureComponent<Props, State> {
  state = {
    electoralVotes: [],
    geoEntities: null,
    mesh: null,
  };

  static async getInitialProps() {
    const map = await mapAPI.fetchMapById(mapId);

    return {
      mapInfo: mapMapInfoModelToVM(map),
    };
  }

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
        mapInfo={this.props.mapInfo}
        electoralVoteEntities={this.state.electoralVotes}
        geoEntities={this.state.geoEntities}
        mesh={this.state.mesh}
      />
    );
  }
}
