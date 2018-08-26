import * as React from "react";
import { Description } from '../../common/components/Description';
import { Map } from '../../common/components/Map';
import { Tags } from '../../common/components/Tags';


interface Props {
    description: string;
    tags: string[];
    onUpdateDescription: (field: string, value: string) => void;
    onUpdateTags: (field: string, value: string[]) => void;
}


export const MapPageLayout: React.StatelessComponent<Props> = (props: Props) => {
    return (
        <div className="container-fluid jumbotron">
            <Map />
            <div className= "container-fluid row"> 
            <Description description={props.description} onUpdateDescription={props.onUpdateDescription}/>
            <Tags tags={props.tags} updateField={props.onUpdateTags} />
            </div> 
            
        </div>
    )
}

