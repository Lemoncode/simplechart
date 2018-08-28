import * as React from 'react';
import { select } from 'd3-selection';
import { GeoProjection, geoMercator } from 'd3-geo';
import { FeatureCollection, GeometryObject, MultiLineString } from 'geojson';
import { mapD3Component } from './d3Components';
import { GeoArea } from './viewModel';
import { cnc } from '../../helpers/classname';
const styles = require('./map.scss');

export interface Props {
  geoAreas: GeoArea[];
  geoEntities: FeatureCollection<GeometryObject, any>;
  mesh: MultiLineString;
  projection?: GeoProjection;
  width?: number;
  height?: number;
  padding?: number;
  defaultfillColor?: string;
  maxZoomScale?: number;
  clickZoomFitScale?: number;
  className?: string;
}

export class MapComponent extends React.PureComponent<Props, {}> {
  private nodes = {
    root: React.createRef<HTMLDivElement>(),
    svg: React.createRef<SVGSVGElement>(),
  };

  static defaultProps: Partial<Props> = {
    width: 700,
    height: 500,
    padding: 20,
    projection: geoMercator(),
    defaultfillColor: 'lightgrey',
    maxZoomScale: 30,
    clickZoomFitScale: 0.65,
  };

  public componentDidMount() {
    if (this.areThereGeoAreas()) {
      this.renderMapD3Component();
    }
  }

  componentDidUpdate() {
    this.renderMapD3Component();
  }

  private areThereGeoAreas = () => (
    Array.isArray(this.props.geoAreas) &&
    this.props.geoAreas.length > 0
  );

  private renderMapD3Component = () => {
    mapD3Component({
      root: select(this.nodes.root.current),
      svg: select(this.nodes.svg.current),
      geoAreas: this.props.geoAreas,
      geoEntities: this.props.geoEntities,
      mesh: this.props.mesh,
      projection: this.props.projection,
      width: this.props.width,
      height: this.props.height,
      padding: this.props.padding,
      defaultfillColor: this.props.defaultfillColor,
      maxZoomScale: this.props.maxZoomScale,
      clickZoomFitScale: this.props.clickZoomFitScale,
    });
  }

  public render() {
    return (
      <div
        className={`${cnc(styles.container, this.props.className)}`}
        ref={this.nodes.root}
      >
        <svg
          ref={this.nodes.svg}
          viewBox={`0 0 ${this.props.width} ${this.props.height}`}
        />
      </div>
    );
  }
}
