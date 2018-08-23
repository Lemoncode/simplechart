import * as React from 'react';
import { Input } from './input';
import { TextArea } from './textArea';

interface Props {
  description: string;
  onUpdateDescription(field: string, value: any);
}

const handleChange = (description, tags) => {

}

export const Description = (props: Props) => (
  <div>

    <div className="row form-group">
      <TextArea
        wrapperClassName="col-md-12"
        type="text"
        name="description"
        label="Description"
        value={props.description}
        onChange={props.onUpdateDescription}
        rows={3}
       // disabled={props.isReadOnly}
      />
    </div>
  </div>
);