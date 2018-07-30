import * as React from 'react';
import Link from 'next/link';

const PageA: React.StatelessComponent = (props) => (
  <div>
    <h1>Page A</h1>
    <Link href="/pageB">
      <a>Page B</a>
    </Link>
  </div>
);

export default PageA;
