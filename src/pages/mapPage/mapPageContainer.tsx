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
  tags: string;
}

export class MapPageContainer extends React.PureComponent<Props, State>  {

  public constructor(props: Props) {
    super(props);
    this.state = {
      description: "",
      tags: ""
    }
  }

  public handleChange(description, tags) {
    this.setState({
      ...this.state,
      description: description,
      tags: tags
    });
  }

  private onUpdateDescription = (field, value) => {
    this.setState(updateDescription(field, value));
  }
 
  public render() {
    return (
      <div>
        <h1>Map page</h1>
        <MapPageLayout description={this.state.description} tags={this.state.tags} onUpdateDescription={this.onUpdateDescription} />
        <Link to="/pageB">Page B</Link>
        <Link to="/pageA">Page A</Link>
      </div>

    );
  }
}


export const updateDescription = (field: string, value: any) => (state: State) => ({
  ...state,
   [field]: value, 
});