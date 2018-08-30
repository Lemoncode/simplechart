import * as React from "react";
import { Description } from '../../common/components/Description';

import { Tags } from '../../common/components/Tags';
import { MapComponent } from "../../common/components/map";
<link rel="stylesheet" href="/static/css/bootstrap.min.css" /> 

interface Props {
    description: string;
    tags: string[];
    onUpdateDescription: (field: string, value: string) => void;
    onUpdateTags: (field: string, value: string[]) => void;
    onDelete: (field: string, value: string[]) => void;
}

export const MapPageLayout: React.StatelessComponent<Props> = (props: Props) => {
    return (
        <div className="container-fluid jumbotron">
            <MapComponent/>
            <div className="container-fluid row">
                <div className="col-md-6 col-sm-6 ">
                    <Description description={props.description} onUpdateDescription={props.onUpdateDescription} />
                </div  >

                <div className="col-md-6 col-sm-6 ">
                    <Tags tags={props.tags} updateField={props.onUpdateTags} onDelete={props.onDelete} />
                </div>
            </div>
        </div>
    )
}
