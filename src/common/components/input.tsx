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
  errorKey?: string; // MultiLang support access by key
  onChange: any;
  disabled?: boolean;
}

export class Input extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  private _refTextField;
  private _rawStr = '';
  private _caretPosition = 0;

  private onChange = (e) => {
    this.props.onChange(e.target.name, e.target.value);
  }

  public componentDidUpdate({ value }) {
    if (this.props.value !== value) {
      const str = this._rawStr.substr(0, this._caretPosition);
      const index = String(this.props.value).indexOf(str) + this._caretPosition;

      if (index !== -1) {
        const refInput = this._refTextField.input;
        try {
          refInput.selectionStart = refInput.selectionEnd = index;
        }
        catch (error) {
          // NOTE: type number does not support selection
        }
      }
    }
  }

  private handleChange = (ev) => {
    this._rawStr = String(ev.target.value);
    this._caretPosition = Number(ev.target.selectionEnd);

    if (this.props.onChange) {
      this.onChange(ev);
    }
  }

  private getRefInput = (textField) => this._refTextField = textField;

  public render() {
    return (
      <div className={this.props.wrapperClassName}>
        
          <label htmlFor={this.props.name} className={this.props.labelClassName}>
            {this.props.label}
          </label>
          <MuiThemeProvider>
          <TextField
            type={this.props.type}
            name={this.props.name}
            hintText={this.props.placeholder}
            value={this.props.value}
            onChange={this.handleChange}
            fullWidth={true}
            disabled={this.props.disabled}
            ref={this.getRefInput}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}
//<ValidationComponent error={this.props.error}>
//</ValidationComponent>