import { D3Selection, Extension } from '../../../common/types';

export interface ZoomArea {
  id: any;
}

export interface Props {
  svg: D3Selection;
  node: D3Selection;
  zoomAreas: ZoomArea[];
  nodeExtension: Extension;
  nodeSelectionElement: string;
  getZoomAreaExension: (zoomArea: ZoomArea) => Extension;
  maxZoomScale: number;
  clickZoomFitScale: number;
  width: number;
  height: number;
}

export interface State {
  currentZoomAreaId: any;
}

export const createEmptyState = (): State => ({
  currentZoomAreaId: null,
});
