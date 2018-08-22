import { Topology, GeometryObject } from 'topojson-specification';
import { presimplify, simplify } from 'topojson-simplify';
import { feature, mesh } from 'topojson-client';
import { geoConicConformalSpain } from 'd3-composite-projections';
import { GeoAreaType } from './model';
import { Feature, FeatureCollection, MultiLineString } from 'geojson';

export const getGeoEntities = (geoAreaType: GeoAreaType): FeatureCollection<GeometryObject, any> => {
  const geoJSON = getGeoJSONSimplyfied(geoAreaType);

  return feature(
    geoJSON,
    geoJSON.objects[geoAreaType.name],
  ) as FeatureCollection<GeometryObject, any>;
};

export const getMesh = (geoAreaType: GeoAreaType): MultiLineString => {
  const geoJSON = getGeoJSONSimplyfied(geoAreaType);

  return mesh(
    geoJSON,
    geoJSON.objects[geoAreaType.name],
  );
};

const getGeoJSONSimplyfied = ({ geoJSON, simplificationFactor }: GeoAreaType): Topology => (
  Boolean(simplificationFactor) ?
    simplify(
      presimplify(geoJSON),
      simplificationFactor,
    ) :
    geoJSON
);

export const getProjection = () => geoConicConformalSpain();

export const getId = (geoEntity: Feature<GeometryObject, any>): string => geoEntity.properties.NATCODE;

export const getName = (geoEntity: Feature<GeometryObject, any>): string => geoEntity.properties.NAMEUNIT;
