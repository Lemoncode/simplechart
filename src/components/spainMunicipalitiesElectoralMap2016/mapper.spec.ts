import { mapElectoralVotesModelToVM, mapGeoAreaListModelToVM, mapMapInfoModelToVM } from './mapper';
import * as model from '../../rest-api/model';
import * as vm from './viewModel';
import { FeatureCollection, GeometryObject } from 'geojson';
import { GeoArea } from '../../common/components/map';

describe('spainMunicipalitiesElectoralMap2016/mappers specs', () => {
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

    it('should return mapped array feeding geoEntities with values', () => {
      // Arrange
      const geoEntities: any = {
        features: [
          {
            properties: {
              NATCODE: '1',
            },
          },
          {
            properties: {
              NATCODE: '2',
            },
          },
          {
            properties: {
              NATCODE: '3',
            },
          },
          {
            properties: {
              NATCODE: '4',
            },
          },
        ],
      };
      const electoralVotes: vm.ElectoralVote[] = [
        {
          id: '1',
          name: 'test name 1',
          party: 'PP',
          province: 'test province 1',
          region: 'test region 1',
        },
        {
          id: '2',
          name: 'test name 2',
          party: 'PSOE',
          province: 'test province 2',
          region: 'test region 2',
        },
        {
          id: '3',
          name: 'test name 3',
          party: 'PODEMOS',
          province: 'test province 3',
          region: 'test region 3',
        },
        {
          id: '4',
          name: 'test name 4',
          party: 'CS',
          province: 'test province 4',
          region: 'test region 4',
        },
      ];

      // Act
      const result = mapGeoAreaListModelToVM(geoEntities, electoralVotes);

      // Assert

      const expectedResult: GeoArea[] = [
        {
          id: '1',
          geoEntity: geoEntities.features[0],
          color: '#0cb2ff',
          tooltipMessage: `
      <h4>test name 1</h4>
      <h3>PP</h3>
    `,
        },
        {
          id: '2',
          geoEntity: geoEntities.features[1],
          color: '#ff0000',
          tooltipMessage: `
      <h4>test name 2</h4>
      <h3>PSOE</h3>
    `,
        },
        {
          id: '3',
          geoEntity: geoEntities.features[2],
          color: '#9a569a',
          tooltipMessage: `
      <h4>test name 3</h4>
      <h3>PODEMOS</h3>
    `,
        },
        {
          id: '4',
          geoEntity: geoEntities.features[3],
          color: '#fca501',
          tooltipMessage: `
      <h4>test name 4</h4>
      <h3>CS</h3>
    `,
        },
      ];

      expect(result).toEqual(expectedResult);
    });
  });

  describe('mapMapInfoModelToVM', () => {
    it('should return mapInfo object with default values when feeding map equals undefined', () => {
      // Arrange
      const map: model.Map = undefined;

      // Act
      const result = mapMapInfoModelToVM(map);

      // Assert
      const expectedResult: vm.MapInfo = {
        id: 0,
        title: '',
        description: '',
      };

      expect(result).toEqual(expectedResult);
    });

    it('should return mapInfo object with default values when feeding map equals null', () => {
      // Arrange
      const map: model.Map = null;

      // Act
      const result = mapMapInfoModelToVM(map);

      // Assert
      const expectedResult: vm.MapInfo = {
        id: 0,
        title: '',
        description: '',
      };

      expect(result).toEqual(expectedResult);
    });

    it('should return mapInfo object with mapped values when feeding map with values', () => {
      // Arrange
      const map: model.Map = {
        id: 1,
        title: 'test title',
        description: 'test description',
        type: 2,
        tags: ['test tag'],
        url: 'test url',
      };

      // Act
      const result = mapMapInfoModelToVM(map);

      // Assert
      const expectedResult: vm.MapInfo = {
        id: 1,
        title: 'test title',
        description: 'test description',
      };

      expect(result).toEqual(expectedResult);
    });
  });
});
