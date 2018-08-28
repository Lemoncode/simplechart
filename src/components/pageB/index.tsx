import * as React from 'react';
import Link from 'next/link';

const PageBComponent: React.StatelessComponent = () => (
  <div>
    <h1>Page B</h1>
    <Link as="pageA" href="/">
      <a>Page A</a>
    </Link>
  </div>
);

export default PageBComponent;
