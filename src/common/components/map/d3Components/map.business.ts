import { select, BaseType } from 'd3';
import { geoPath } from 'd3-geo';
import { Extension } from '../../../types';
import { SVG_SHADOW_ID } from './constants';
import { Props, State } from './map.state';
const styles = require('./map.scss');

// Useful for rendering strokes in complicated objects efficiently
// https://github.com/topojson/topojson-client/blob/master/README.md#mesh
export const renderMesh = (props: Props, state: State) => {
  state.map
    .append('g')
    .append('path')
    // Assign mesh to a single path
    .datum(props.mesh)
    .attr('class', styles.mesh)
    .attr('d', state.geoPathGenerator);
};

export const calculateMapExtension = ({ width, height, padding }: Props): Extension => ([
  [padding, padding],
  [width - padding, height - padding],
]);

export const getGeoPathGenerator = (props: Props, state: State) => (
  geoPath(
    props.projection
      .fitExtent(state.mapExtension, props.geoEntities),
  )
);

export const addHighlight = (geoAreaElement: BaseType, highlightColor = 'yellow') => {
  if (geoAreaElement) {
    select(geoAreaElement)
      .attr('filter', `url(#${SVG_SHADOW_ID})`)
      .attr('stroke', highlightColor)
      .attr('stroke-width', '0.5px');
  }
};

export const removeHighlight = (geoAreaElement: BaseType) => {
  if (geoAreaElement) {
    select(geoAreaElement)
      .attr('filter', `none`)
      .attr('stroke', 'none');
  }
};
