import * as React from 'react';
import Link from 'next/link';
import { routes } from '../../common/constants/routes';

const PageBComponent: React.StatelessComponent = () => (
  <div>
    <h1>Page B</h1>
    <Link href={routes.default}>
      <a>Page A</a>
    </Link>
  </div>
);

export default PageBComponent;
