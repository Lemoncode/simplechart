import * as React from 'react';
import { TextField } from '@material-ui/core';
const styles = require('./reactTagsAndText.scss');

interface Props {
    type: string;
    name: string;
    label?: string;
    labelClassName?: string;
    wrapperClassName?: string;
    value: string | number;
    placeholder?: string;
    error?: string;
    onChange: (name, value) => void;
    disabled?: boolean;
    rows?: number;
}

export const TextArea: React.StatelessComponent<Props> = (props) => {
    return (

        <div className={styles.container}>

            <TextField
                type={props.type}
                name={props.name}
                label={props.label}
                value={props.value}
                onChange={onChange(props)}
                multiline
                rowsMax={props.rows}
                className={styles.textField}
                disabled={props.disabled}

            />
        </div>

    );
};

const onChange = (props: Props) => (e) => {
    props.onChange(e.target.name, e.target.value);
};
