import { createEmptyState, State, Props, ZoomArea } from './zoom.state';
import { enableZoomOnSvg, resetZoom, applyZoom } from './zoom.business';

export const zoomD3Component = (props: Props) => {
  const state = createEmptyState();
  data(props, state);
  enableZoomOnSvg(props);
};

const data = (props: Props, state: State) => {
  props.node
    .selectAll(props.nodeSelectionElement)
    .data(props.zoomAreas, (zoomArea: ZoomArea) => zoomArea.id)
    .on('click', (zoomArea: ZoomArea) => {
      state.currentZoomAreaId === zoomArea.id ?
        resetZoom(props, state) :
        applyZoom(zoomArea, props, state);
    });
};
