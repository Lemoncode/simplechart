import * as vm from './viewModel';
import * as model from '../../rest-api/model';
import { mapMapListModelToVM } from './mappers';

describe('home/mappers specs', () => {
  describe('mapMapListModelToVM', () => {
    it('should return empty array feeding maps equals undefined', () => {
      // Arrange
      const maps: model.Map[] = undefined;

      // Act
      const result = mapMapListModelToVM(maps);

      // Assert
      expect(result).toEqual([]);
    });

    it('should return empty array feeding maps equals null', () => {
      // Arrange
      const maps: model.Map[] = null;

      // Act
      const result = mapMapListModelToVM(maps);

      // Assert
      expect(result).toEqual([]);
    });

    it('should return empty array feeding maps equals empty array', () => {
      // Arrange
      const maps: model.Map[] = [];

      // Act
      const result = mapMapListModelToVM(maps);

      // Assert
      expect(result).toEqual([]);
    });

    it('should return mapped array feeding maps equals with one item', () => {
      // Arrange
      const maps: model.Map[] = [
        {
          id: 1,
          title: 'test title',
          type: 2,
          description: 'test description',
          tags: ['test tag 1', 'test tag 2'],
          url: 'test url',
        },
      ];

      // Act
      const result = mapMapListModelToVM(maps);

      // Assert
      const expectedResult: vm.Map[] = [
        {
          id: 1,
          title: 'test title',
          type: 2,
          description: 'test description',
          tags: ['test tag 1', 'test tag 2'],
          url: 'test url',
        },
      ];
      expect(result).toEqual(expectedResult);
    });
  });
});
