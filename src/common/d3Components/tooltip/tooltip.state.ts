import { D3Selection } from '../../types';

export interface Props {
  node: D3Selection;
  xOffset?: number;
  yOffset?: number;
}

export interface State {
  tooltip: D3Selection;
}

export const createEmptyState = (): State => ({
  tooltip: null,
});
