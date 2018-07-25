import * as React from 'react';
import PageAComponent from './pageA/pageA';

const App: React.StatelessComponent = (props) => (
  <div>
    {/* {props.children} */}
    <PageAComponent/>
  </div>
);

export default App;
