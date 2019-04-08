import * as React from "react";
import { Description } from '../../common/components/Description';
import { Tags } from '../../common/components/Tags';
import ElectoralMapContainer from "../spainMunicipalitiesElectoralMap2016";
import { Tag } from "./viewModel";
import { MapInfo } from "../spainMunicipalitiesElectoralMap2016/viewModel";

interface Props {
    description: string;
    tags: Tag[];
    onUpdateDescription: (field: string, value: string) => void;
    onUpdateTags: (field: string, value: Tag[]) => void;
    onDelete: (field: string, value: Tag[]) => void;
    mapInfo: MapInfo;

}

export const MapPageLayout: React.StatelessComponent<Props> = (props: Props) => {
    return (
        <div >

            <ElectoralMapContainer mapInfo= {props.mapInfo} />


            <Description description={props.description} onUpdateDescription={props.onUpdateDescription} />


            <Tags tags={props.tags} updateField={props.onUpdateTags} onDelete={props.onDelete} />



        </div>
    )
}