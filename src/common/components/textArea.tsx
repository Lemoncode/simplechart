import * as React from 'react';
//import { ValidationComponent } from './validation';
import TextField from 'material-ui/TextField';
import { MuiThemeProvider } from 'material-ui/styles';

interface Props {
    type: string;
    name: string;
    label?: string;
    labelClassName?: string;
    wrapperClassName?: string;
    value: string | number;
    placeholder?: string;
    error?: string;
    onChange: ( name, value ) => void;
    disabled?: boolean;
    rows?: number;
}

// TODO: Add proper styling
// TODO: Add unit tests support (similar to textinput)
// TODO: Bug when editing and on focus? Fixed on text input
export const TextArea: React.StatelessComponent<Props> = (props) => {
    return (
        <div className={props.wrapperClassName}>

            <label htmlFor={props.name} className={props.labelClassName}>
                {props.label}
            </label>
            <MuiThemeProvider>
                <TextField
                    type={props.type}
                    name={props.name}
                    floatingLabelText={props.placeholder}
                    value={props.value}
                    onChange={onChange(props)}
                    hintText={props.placeholder}
                    fullWidth={true}
                    disabled={props.disabled}
                    multiLine={true}
                    rows={props.rows}
                    rowsMax={props.rows}
                />
            </MuiThemeProvider>
        </div>
    );
};

const onChange = (props: Props) => (e) => {
    props.onChange(e.target.name, e.target.value);
};
//<ValidationComponent error={props.error}> </ValidationComponent>