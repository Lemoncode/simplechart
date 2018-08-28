import { Feature, GeometryObject } from 'geojson';

export interface GeoArea {
  id: string;
  geoEntity: Feature<GeometryObject, any>;
  color: string;
  tooltipMessage: string;
}

export const createEmptyGeoArea = (): GeoArea => ({
  id: '',
  geoEntity: null,
  color: '',
  tooltipMessage: '',
});
