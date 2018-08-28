import { D3Selection, Extension } from '../../../types';
import { GeoPath, GeoPermissibleObjects, GeoProjection } from 'd3-geo';
import { GeometryObject, FeatureCollection, MultiLineString } from 'geojson';
import { GeoArea } from '../viewModel';

export interface Props {
  root: D3Selection;
  svg: D3Selection;
  geoAreas: GeoArea[];
  geoEntities: FeatureCollection<GeometryObject, any>;
  mesh: MultiLineString;
  projection: GeoProjection;
  width: number;
  height: number;
  padding: number;
  defaultfillColor: string;
  maxZoomScale: number;
  clickZoomFitScale: number;
  highlightColor?: string;
}

export interface State {
  map: D3Selection;
  mapExtension: Extension;
  geoPathGenerator: GeoPath<any, GeoPermissibleObjects>;
  onShowTooltip: (message: string) => void;
  onHideTooltip: () => void;
  onUpdateTooltipPosition: () => void;
}

export const createEmptyState = (): State => ({
  map: null,
  mapExtension: null,
  geoPathGenerator: null,
  onShowTooltip: null,
  onHideTooltip: null,
  onUpdateTooltipPosition: null,
});
