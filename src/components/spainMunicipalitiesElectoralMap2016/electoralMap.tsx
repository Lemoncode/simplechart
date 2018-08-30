import * as React from 'react';
import { FeatureCollection, GeometryObject, MultiLineString } from 'geojson';
import { MapComponent } from '../../common/components/map';
import { mapGeoAreaListModelToVM } from './mapper';
import { getProjection } from '../../common/geo/spain';
import { ElectoralVote } from './viewModel';
const styles = require('./electoralMap.scss');

interface Props {
  electoralVoteEntities: ElectoralVote[];
  geoEntities: FeatureCollection<GeometryObject, any>;
  mesh: MultiLineString;
}

export const ElectoralMapComponent: React.StatelessComponent<Props> = (props) => (
  <div className={styles.electoralMap}>
    <h1 className={styles.header}>Electoral map</h1>
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
