import { mapElectoralVotesModelToVM, mapGeoAreaListModelToVM } from './mapper';
import * as model from '../../rest-api/model';
import * as vm from './viewModel';
import { FeatureCollection, GeometryObject } from 'geojson';
import { GeoArea } from '../../common/components/map';

describe('spainMunicipalitiesElectoralMap2016/mapper specs', () => {
  describe('mapElectoralVotesModelToVM', () => {
    it('should return empty array feeding electoralVotes equals undefined', () => {
      // Arrange
      const electoralVotes: model.ElectoralVote[] = undefined;

      // Act
      const result = mapElectoralVotesModelToVM(electoralVotes);

      // Assert
      expect(result).toEqual([]);
    });

    it('should return empty array feeding electoralVotes equals null', () => {
      // Arrange
      const electoralVotes: model.ElectoralVote[] = null;

      // Act
      const result = mapElectoralVotesModelToVM(electoralVotes);

      // Assert
      expect(result).toEqual([]);
    });

    it('should return empty array feeding electoralVotes equals empty array', () => {
      // Arrange
      const electoralVotes: model.ElectoralVote[] = [];

      // Act
      const result = mapElectoralVotesModelToVM(electoralVotes);

      // Assert
      expect(result).toEqual([]);
    });

    it('should return mapped array feeding electoralVotes equals with values', () => {
      // Arrange
      const electoralVotes: model.ElectoralVote[] = [
        {
          id: 1,
          name: 'test name',
          party: 'test party',
          province: 'test province',
          region: 'test region',
        },
      ];

      // Act
      const result = mapElectoralVotesModelToVM(electoralVotes);

      // Assert
      const expectedResult: vm.ElectoralVote[] = [
        {
          id: '1',
          name: 'test name',
          party: 'test party',
          province: 'test province',
          region: 'test region',
        },
      ];
      expect(result).toEqual(expectedResult);
    });
  });

  describe('mapGeoAreaListModelToVM', () => {
    it('should return empty array feeding geoEntities equals undefined', () => {
      // Arrange
      const geoEntities: FeatureCollection<GeometryObject, any> = undefined;
      const electoralVotes: vm.ElectoralVote[] = [
        {
          id: '1',
          name: 'test name',
          party: 'test party',
          province: 'test province',
          region: 'test region',
        },
      ];

      // Act
      const result = mapGeoAreaListModelToVM(geoEntities, electoralVotes);

      // Assert
      expect(result).toEqual([]);
    });

    it('should return empty array feeding geoEntities equals null', () => {
      // Arrange
      const geoEntities: FeatureCollection<GeometryObject, any> = null;
      const electoralVotes: vm.ElectoralVote[] = [
        {
          id: '1',
          name: 'test name',
          party: 'test party',
          province: 'test province',
          region: 'test region',
        },
      ];

      // Act
      const result = mapGeoAreaListModelToVM(geoEntities, electoralVotes);

      // Assert
      expect(result).toEqual([]);
    });
  });
});
