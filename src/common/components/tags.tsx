import * as React from 'react';
import { ChipField } from './chipField';

interface Props {
    tags: string[];
    updateField(field: string, value: string[]): void;
}

export const Tags = (props: Props) => (
    <div>
        <ChipField
              name="tags"
              label="Tags"
              wrapperClassName="col-md-12"
              value={props.tags}
              valueMemberPath="id"
              displayMemberPath="value"
              onChange={props.updateField}
              dataSource={props.tags}
              allowDuplicates={false}
          />
    </div>
);
