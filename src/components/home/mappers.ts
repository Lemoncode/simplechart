import * as vm from './viewModel';
import * as model from '../../rest-api/model';

export const mapMapListModelToVM = (maps: model.Map[]): vm.Map[] => (
  Array.isArray(maps) ?
    maps.map(mapMapModelToVm) :
    []
);

const mapMapModelToVm = (map: model.Map): vm.Map => (
  Boolean(map) ?
    {
      ...map,
    } :
    vm.createEmptyMap()
);
