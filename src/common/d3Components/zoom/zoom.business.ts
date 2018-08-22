import { event as d3Event } from 'd3-selection';
import { zoom, zoomIdentity } from 'd3-zoom';
import { State, Props, ZoomArea } from './zoom.state';

const getZoomHandler = ({ node, nodeExtension, maxZoomScale }: Props) => zoom()
  .extent(nodeExtension)
  .scaleExtent([1, maxZoomScale])
  .translateExtent(nodeExtension)
  .on('zoom', () => {
    node.attr('transform', d3Event.transform);
  });

export const enableZoomOnSvg = (props: Props) => {
  props.svg.call(getZoomHandler(props));
};

export const applyZoom = (zoomArea: ZoomArea, props: Props, state: State) => {
  const zoomAreaExtension = props.getZoomAreaExension(zoomArea);

  const dx = zoomAreaExtension[1][0] - zoomAreaExtension[0][0];
  const dy = zoomAreaExtension[1][1] - zoomAreaExtension[0][1];
  const x = (zoomAreaExtension[0][0] + zoomAreaExtension[1][0]) / 2;
  const y = (zoomAreaExtension[0][1] + zoomAreaExtension[1][1]) / 2;
  const scale = Math.max(1, Math.min(props.maxZoomScale,
    props.clickZoomFitScale / Math.max(dx / props.width, dy / props.height)));
  const translate = [props.width / 2 - scale * x, props.height / 2 - scale * y];

  props.svg
    .transition()
    .duration(750)
    .call(
      getZoomHandler(props).transform,
      zoomIdentity
        .translate(translate[0], translate[1])
        .scale(scale),
    );

  state.currentZoomAreaId = zoomArea.id;
};

export const resetZoom = (props: Props, state: State) => {
  props.svg.transition()
    .duration(750)
    .call(getZoomHandler(props).transform, zoomIdentity);
  state.currentZoomAreaId = null;
};
