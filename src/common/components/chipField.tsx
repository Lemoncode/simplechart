import * as React from 'react';


import { Chip } from 'material-ui/Chip';
import * as materialchip from 'material-ui-chip-input';
import { MuiThemeProvider } from 'material-ui/styles';

const ChipInput = materialchip.default;

interface Props {
    name: string;
    label: string;
    labelClassName?: string;
    wrapperClassName?: string;
    value: string[] ;
    dataSource?: string[];
    error?: string;
    onChange?: any;
    disabled?: boolean;
    displayMemberPath: string;
    valueMemberPath: string;
    allowDuplicates?: boolean;
    onlyLookUpValue?: boolean;
}

export const ChipField: React.StatelessComponent<Props> = (props) => {
    return (
        <div className={props.wrapperClassName}>
            <MuiThemeProvider>
                <ChipInput
                    fullWidth={true}
                    label="Tags"
                    value={props.value}
                    maxSearchResults={3}
                    dataSourceConfig={{text: props.displayMemberPath, value: props.valueMemberPath}}
                    onRequestAdd={handleAddChip(props)}
                    onRequestDelete={handleDeleteChip(props)}
                    allowDuplicates={props.allowDuplicates}
                    dataSource={props.dataSource}
                    className = "col-md-12"
                />
           </MuiThemeProvider>
        </div>
    );
};

const handleAddChip = (props: Props) => (chip) => {
    const newArray = [...props.value, ({id: -1, value: chip.value})];
    props.onChange(props.name, newArray);
};

const handleDeleteChip = (props: Props) => (chip, index) => {
    const newArray = props.value.filter(findElement(chip));
    props.onChange(props.name, newArray);
};

const findElement = (chip) => (item) => {
    return item.id !== chip;
};
