import { GeoAreaType } from './model';

const communitiesGeoJSON = require('./resources/Spain-02-Communities.MIN.topo.json');
const provincesGeoJSON = require('./resources/Spain-03-Provinces.MIN.topo.json');
const municipalitiesGeoJSON = require('./resources/Spain-04-Municipalities.MIN.topo.json');

const communities: GeoAreaType = {
  name: 'communities',
  geoJSON: communitiesGeoJSON,
};

const provinces: GeoAreaType = {
  name: 'provinces',
  geoJSON: provincesGeoJSON,
};

const municipalities: GeoAreaType = {
  name: 'municipalities',
  geoJSON: municipalitiesGeoJSON,
  simplificationFactor: 0.001,
};

export const geoAreaTypes = {
  communities,
  provinces,
  municipalities,
};
