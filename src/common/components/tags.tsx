import * as React from 'react';
import { ChipField } from './chipField';
import { Tag } from '../../components/mapPage/viewModel';


interface Props {
    tags: Tag[];
    updateField(field: string, value: Tag[]): void;
    onDelete: (field: string, value: Tag[]) => void;
}

export const Tags = (props: Props) => (
    <div>
        <ChipField
              name="tags"
              label="Tags"
              wrapperClassName="col-md-6 col-sm-6"
              value={props.tags}
              valueMemberPath="id"
              displayMemberPath="value"
              onChange={props.updateField}
              dataSource={props.tags}
              allowDuplicates={false}
              onDelete= {props.onDelete}
          />
    </div>
);
