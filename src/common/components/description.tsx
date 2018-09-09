import * as React from 'react';
import { TextArea } from './textArea';

interface Props {
  description: string;
  onUpdateDescription(field: string, value: any);
}

export const Description = (props: Props) => (

  <TextArea   
    type="text"
    name="description"
    placeholder="Description"
    label= 'Description'
    value={props.description}
    onChange={props.onUpdateDescription}
    rows={2}
  />

);