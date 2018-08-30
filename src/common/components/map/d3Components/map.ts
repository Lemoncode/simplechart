import { GeoArea } from '../viewModel';
import { createEmptyState, State, Props } from './map.state';
import { shadowDefinitions } from './shadowDefinitions';
import { tooltipD3Component } from '../../../d3Components/tooltip';
import { zoomD3Component } from '../../../d3Components/zoom';
import { calculateMapExtension, getGeoPathGenerator, renderMesh, addHighlight, removeHighlight } from './map.business';
const styles = require('./map.scss');

export const mapD3Component = (props: Props) => {
  const state = createEmptyState();
  shadowDefinitions({
    svg: props.svg,
  });

  state.map = renderMap(props);
  state.mapExtension = calculateMapExtension(props);
  state.geoPathGenerator = getGeoPathGenerator(props, state);

  enter(props, state);
  renderMesh(props, state);

  zoomD3Component({
    svg: props.svg,
    node: state.map,
    zoomAreas: props.geoAreas,
    nodeExtension: state.mapExtension,
    nodeSelectionElement: 'path',
    getZoomAreaExension: (geoArea: GeoArea) => (
      state.geoPathGenerator.bounds(geoArea.geoEntity)
    ),
    maxZoomScale: props.maxZoomScale,
    clickZoomFitScale: props.clickZoomFitScale,
    width: props.width,
    height: props.height,
  });

  const { onShowTooltip, onHideTooltip, onUpdateTooltipPosition } = tooltipD3Component({
    node: props.root,
  });
  state.onShowTooltip = onShowTooltip;
  state.onHideTooltip = onHideTooltip;
  state.onUpdateTooltipPosition = onUpdateTooltipPosition;
};

const renderMap = (props: Props) => props.svg.append('g');

const enter = (props: Props, state: State) => {
  state.map
    .append('g')
    .selectAll('path')
    .data(props.geoAreas, (geoArea: GeoArea) => geoArea.id)
    .enter()
    .append('path')
    .attr('class', styles.geoArea)
    .attr('d', (geoArea: GeoArea) => state.geoPathGenerator(geoArea.geoEntity))
    .attr('fill', (geoArea: GeoArea) => (
      Boolean(geoArea.color) ?
        geoArea.color :
        props.defaultfillColor
    ))
    .on('mouseenter', function(geoArea: GeoArea) {
      addHighlight(this, props.highlightColor);
      state.onShowTooltip(geoArea.tooltipMessage);
    })
    .on('mousemove', () => state.onUpdateTooltipPosition)
    .on('mouseleave', function() {
      removeHighlight(this);
      state.onHideTooltip();
    });
};
