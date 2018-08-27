import * as React from 'react';
import { TextArea } from './textArea';

interface Props {
  description: string;
  onUpdateDescription(field: string, value: any);
}

export const Description = (props: Props) => (

  <TextArea
    wrapperClassName="col-md-6"
    type="text"
    name="description"
    placeholder="Description"
    value={props.description}
    onChange={props.onUpdateDescription}
    rows={2}
  />

);