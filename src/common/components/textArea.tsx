import * as React from 'react';
import { TextField } from '@material-ui/core';


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

export const TextArea: React.StatelessComponent<Props> = (props) => {
    return (
        <div className={props.wrapperClassName}>
            <label htmlFor={props.name} className={props.labelClassName}>
                {props.label}
            </label>
          
                <TextField
                    type={props.type}
                    name={props.name}
             
                    value={props.value}
                    onChange={onChange(props)}
              
                    fullWidth={true}
                    disabled={props.disabled}
                  
                    rows={props.rows}
                    rowsMax={props.rows}
                />

        </div>
    );
};

const onChange = (props: Props) => (e) => {
    props.onChange(e.target.name, e.target.value);
};
