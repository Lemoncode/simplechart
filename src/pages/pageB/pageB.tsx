import * as React from 'react';
import { Link } from 'react-router-dom';

export const PageBComponent: React.StatelessComponent = (props) => (
  <div>
    <h1>Page B</h1>
    <Link to="/">Page A</Link>
  </div>
);
