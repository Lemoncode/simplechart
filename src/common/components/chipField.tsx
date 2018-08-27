import * as React from 'react';
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
    onDelete: (field: string, value: string[]) => void;
}

export const ChipField: React.StatelessComponent<Props> = (props) => {
    return (
        <div className={props.wrapperClassName}>
            <MuiThemeProvider>
                <ChipInput
                    fullWidth={true}
                    floatinglabelText="Tags"
                    placeholder="Tags"                  
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
    props.onChange(props.name, chip);
};

 const handleDeleteChip = (props: Props) => (chip, index) => {
    const newArray = props.value.filter(findElement(chip));
    props.onDelete(props.name, newArray);
}; 

const findElement = (chip) => (item) => {
    return item.id !== chip;
};
