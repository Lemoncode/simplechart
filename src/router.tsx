import * as React from 'react';
import { App } from './app';
import { PageAComponent } from './pages/pageA';
import { PageBComponent } from './pages/pageB';
import { Route, Switch, HashRouter } from 'react-router-dom';

export const AppRouter: React.StatelessComponent<{}> = () => (
  <HashRouter>
    <Switch>
      <Route exact={true} path="/" component={PageAComponent}/>
      <Route path="/pageB" component={PageBComponent}/>
    </Switch>
  </HashRouter>
);
