import * as React from 'react';



interface Props {
    tags: string;
}

export const Tags = (props: Props) => (
    <div>
        <h1>{props.tags}</h1>
    </div>
);