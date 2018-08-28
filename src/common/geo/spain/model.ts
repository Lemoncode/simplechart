import { Topology } from 'topojson-specification';

export interface GeoAreaType {
  name: string;
  geoJSON: Topology;
  simplificationFactor?: number; // Simplify threshold. 0 = no simplification.
}
