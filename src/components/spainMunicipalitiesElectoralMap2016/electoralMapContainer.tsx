import * as React from 'react';
import { FeatureCollection, GeometryObject, MultiLineString } from 'geojson';
import { ElectoralVote, MapInfo } from './viewModel';
import { getGeoEntities, geoAreaTypes, getMesh } from '../../common/geo/spain';
import { ElectoralMapComponent } from './electoralMap';
import { trackPromise } from 'react-promise-tracker';
import { LoadingSpinnerComponent } from '../../common/spinner';
import { mapElectoralVotesModelToVM, mapMapInfoModelToVM } from './mapper';
import { mapAPI } from '../../rest-api/api/map';
import Router from 'next/router'

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
    console.log('** [0] getInitialProps');
    const map = await trackPromise(mapAPI.fetchMapById(mapId));
    
    console.log(' [1] Launching simulated promise');
    const myPromise = await trackPromise(new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(' [3] Simulate 2000 ms response');
        resolve({});
      }, 2000)
    }));

    return {
      mapInfo: mapMapInfoModelToVM(map),
    };
  }

  componentDidMount() {
    console.log(' [2] Didmount')
    trackPromise(
      this.loadMapData(),
    );
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
      <>
      <ElectoralMapComponent
        mapInfo={this.props.mapInfo}
        electoralVoteEntities={this.state.electoralVotes}
        geoEntities={this.state.geoEntities}
        mesh={this.state.mesh}
      />
      </>
    );
  }
}

let inProgressResolve = null;

Router.onRouteChangeStart = () => {
  const promise = new Promise((resolve, reject) => {
      inProgressResolve = resolve;
  });

  (promise);
}

Router.onRouteChangeComplete = () => {
  inProgressResolve({success: true});
}
Router.onRouteChangeError = () => {
  inProgressResolve({success: false});
}