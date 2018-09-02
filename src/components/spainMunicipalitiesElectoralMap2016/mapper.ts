import { FeatureCollection, GeometryObject } from 'geojson';
import { GeoArea, createEmptyGeoArea } from '../../common/components/map';
import { getId } from '../../common/geo/spain';
import * as vm from './viewModel';
import * as model from '../../rest-api/model';

export const mapElectoralVotesModelToVM = (electoralVotes: model.ElectoralVote[]): vm.ElectoralVote[] => (
  Boolean(electoralVotes) ?
    electoralVotes.map(mapElectoralVoteModelToVM) :
    []
);

const mapElectoralVoteModelToVM = (electoralVote: model.ElectoralVote): vm.ElectoralVote => (
  Boolean(electoralVote) ?
    {
      id: electoralVote.id.toString(),
      name: electoralVote.name,
      region: electoralVote.region,
      province: electoralVote.province,
      party: electoralVote.party,
    } :
    vm.createEmptyElectoralVote()
);

export const mapGeoAreaListModelToVM =
  (geoEntities: FeatureCollection<GeometryObject, any>, electoralVotes: vm.ElectoralVote[]): GeoArea[] =>
    (
      Boolean(geoEntities) ?
        geoEntities.features.map((geoEntity) => (
          mapGeoAreaModelToVM(geoEntity, electoralVotes)
        )) :
        []
    );

const mapGeoAreaModelToVM = (geoEntity, electoralVotes: vm.ElectoralVote[]): GeoArea => {
  const id = getId(geoEntity);
  const electoralVote = electoralVotes.find((item) => item.id === id);

  return Boolean(electoralVote) ?
    {
      id,
      geoEntity,
      color: getColor(electoralVote),
      tooltipMessage: getTooltipMessage(electoralVote),
    } :
    createEmptyGeoArea();
};

const partyColors = {
  PP: '#0cb2ff',
  PSOE: '#ff0000',
  PODEMOS: '#9a569a',
  CS: '#fca501',
};

const getColor = (electoralVote: vm.ElectoralVote) => (
  partyColors[electoralVote.party]
);

const getTooltipMessage = (electoralVote: vm.ElectoralVote) => (
  Boolean(electoralVote) ?
    `
      <h4>${electoralVote.name}</h4>
      <h3>${electoralVote.party}</h3>
    ` :
    '<h4>Sin Datos</h4>'
);

export const mapMapInfoModelToVM = (map: model.Map): vm.MapInfo => (
  Boolean(map) ?
    {
      id: map.id,
      title: map.title,
      description: map.description,
    } :
    vm.createEmptyMapInfo()
);
