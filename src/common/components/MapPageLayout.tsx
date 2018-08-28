import * as React from "react";
import { Description } from './Description';
import { Map } from './Map';
import { Tags } from './Tags';

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
            <Map />
            <div className="container-fluid row">
                <Description description={props.description} onUpdateDescription={props.onUpdateDescription} />
                <Tags tags={props.tags} updateField={props.onUpdateTags} onDelete= {props.onDelete} />
            </div>
        </div>
    )
}
