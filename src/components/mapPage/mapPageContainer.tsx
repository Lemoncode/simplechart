import * as React from 'react';
import { MapPageLayout } from './MapPageLayout';
import { Tag } from './viewModel';
import { MapInfo } from '../spainMunicipalitiesElectoralMap2016/viewModel';
import { mapAPI } from '../../rest-api/api/map';
import { mapMapInfoModelToVM } from '../spainMunicipalitiesElectoralMap2016/mapper';

const mapId = 1;

interface Props {
  mapInfo: MapInfo;
}

interface State {
  description: string;
  tags: Tag[];
}

export class MapPageContainer extends React.PureComponent<Props, State>  {

  public constructor(props: Props) {
    super(props);
    this.state = {
      description: "",
      tags: [
        { id: "1", text: "Elecciones" },
        { id: "2", text: "Votos" }
      ]
    }
  }

  static async getInitialProps() {
    const map = await mapAPI.fetchMapById(mapId);

    return {
      mapInfo: mapMapInfoModelToVM(map),
    };
  }

  private onUpdateDescription = (field, value) => {
    this.setState(updateDescription(field, value));
  }

  private onUpdateTags = (field, value) => {
    this.setState(updateTags(field, value));
  }

  private onDeleteTags = (field, value) => {
    this.setState(onDeleteTags( field, value));
  }

  public render() {
    return (
      <div className="container-fluid row">
        <MapPageLayout
        mapInfo={this.props.mapInfo}
        description={this.state.description}
          tags={this.state.tags}
          onUpdateDescription={this.onUpdateDescription}
          onUpdateTags={this.onUpdateTags}
          onDelete={this.onDeleteTags} />


      </div>
    );
  }
}

export const updateDescription = (field: string, value: any) => (state: State) => ({
  ...state,
  [field]: value

});

export const updateTags = (field: string, value: string) => (state: State) => ({
  ...state,
  tags: [...state.tags, value]
  
});


export const onDeleteTags = (field: string, value: Tag[]) => (state: State) => ({
  ...state,
  tags: value
});


