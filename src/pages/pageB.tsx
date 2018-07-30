import * as React from 'react';
import Link from 'next/link';

const PageB: React.StatelessComponent = (props) => (
  <div>
    <h1>Page B</h1>
    <Link as="/" href="/pageA">
      <a>Page A</a>
    </Link>
  </div>
);

export default PageB;
