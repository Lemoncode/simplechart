import * as React from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import { Tag } from './map';

interface Props {
    name: string;
    label: string;
    labelClassName?: string;
    wrapperClassName?: string;
    value: Tag[];
    dataSource?: Tag[];
    error?: string;
    onChange?: any;
    disabled?: boolean;
    displayMemberPath: string;
    valueMemberPath: string;
    allowDuplicates?: boolean;
    onlyLookUpValue?: boolean;
    onDelete: (field: string, value: Tag[]) => void;
}

export const ChipField: React.StatelessComponent<Props> = (props) => {
    return (
        <div className={props.wrapperClassName}>

            <ReactTags tags={props.value}
                label={props.value}
                handleDelete={handleDeleteChip(props, props.value)}
                handleAddition={handleAddChip(props)}
                classNames={{
                    tags: 'tagsClass',
                    tagInput: 'tagInputClass',
                    tagInputField: 'tagInputFieldClass',
                    selected: 'selectedClass',
                    tag: 'tagClass',
                    remove: 'removeClass',
                    suggestions: 'suggestionsClass',
                    activeSuggestion: 'activeSuggestionClass'
                }}
            />

        </div>
    );
};

const handleAddChip = (props: Props) => (chip) => {
    props.onChange(props.name, chip);
};

const handleDeleteChip = (props: Props, tags: Tag[]) => (i) => {
    const newArray = tags.filter((tag, index) => index !== i);
    props.onDelete(props.name, newArray);
}

const findElement = (i) => (props) => {
    return props.value !== props.value[i];
};
