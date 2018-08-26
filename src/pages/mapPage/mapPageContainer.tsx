import * as React from 'react';
import { Link } from 'react-router';
import { MapPageLayout } from '../../common/components/MapPageLayout';
import { Description } from '../../common/components/Description';
import { Map } from '../../common/components/Map';
import { Tags } from '../../common/components/Tags';

interface Props {

}

interface State {
  description: string;
  tags: string[];
}

export class MapPageContainer extends React.PureComponent<Props, State>  {

  public constructor(props: Props) {
    super(props);
    this.state = {
      description: "",
      tags: []
    }
  }
/* 
  public handleChange(description, tags) {
    this.setState({
      ...this.state,
      description: description,
      tags: tags
    });
  } */

  private onUpdateDescription = (field, value) => {
    this.setState(updateDescription(field, value));
  }

  private onUpdateTags = (field, value) => {
    this.setState(updateTags(field, value));
  }

  public render() {
    return (

      <div className="container-fluid row">
        <MapPageLayout description={this.state.description} tags={this.state.tags} onUpdateDescription={this.onUpdateDescription} onUpdateTags={this.onUpdateTags} />

        <Link to="/pageB">Page B</Link>
        <Link to="/pageA">Page A</Link>

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


