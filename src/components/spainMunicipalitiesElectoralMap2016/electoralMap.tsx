import * as React from 'react';
import { FeatureCollection, GeometryObject, MultiLineString } from 'geojson';
import { MapComponent } from '../../common/components/map';
import { mapGeoAreaListModelToVM } from './mapper';
import { getProjection } from '../../common/geo/spain';
import { ElectoralVote, MapInfo } from './viewModel';
const styles = require('./electoralMap.scss');

interface Props {
  mapInfo: MapInfo;
  electoralVoteEntities: ElectoralVote[];
  geoEntities: FeatureCollection<GeometryObject, any>;
  mesh: MultiLineString;
}

export const ElectoralMapComponent: React.StatelessComponent<Props> = (props) => (
  <div className={styles.electoralMap}>
    <div className={styles.header}>
      <h1>{props.mapInfo.title}</h1>
      <p>{props.mapInfo.description}</p>
    </div>
    <div className={styles.mapContainer}>
      <MapComponent
        geoAreas={mapGeoAreaListModelToVM(props.geoEntities, props.electoralVoteEntities)}
        geoEntities={props.geoEntities}
        mesh={props.mesh}
        projection={getProjection()}
      />
    </div>
  </div>
);
