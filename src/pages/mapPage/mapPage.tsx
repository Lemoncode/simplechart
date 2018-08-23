import * as React from 'react';
import { Link } from 'react-router';
import { MapPageLayout } from '../../common/components/MapPageLayout';

export const MapPageComponent: React.StatelessComponent = (props) => (
  <div>
    <h1>Map page</h1>
    <MapPageLayout/>
    <Link to="/pageB">Page B</Link>
    <Link to="/pageA">Page A</Link>
  </div>
);
