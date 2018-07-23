import * as React from 'react';
import { Link } from 'react-router-dom';

export const PageAComponent: React.StatelessComponent = (props) => (
  <div>
    <h1>Page A</h1>
    <Link to="/pageB">Page B</Link>
  </div>
);
