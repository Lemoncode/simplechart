import * as React from 'react';
import { Link } from 'react-router';

export const PageBComponent: React.StatelessComponent = (props) => (
  <div>
    <h1>Page B</h1>
    <Link to="/pageA">Page A</Link>
  </div>
);
