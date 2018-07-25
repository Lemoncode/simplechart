import * as React from 'react';
import { PageAComponent } from './pages/pageA';

export const App: React.StatelessComponent = (props) => (
  <div>
    {/* {props.children} */}
    <PageAComponent/>
  </div>
);
