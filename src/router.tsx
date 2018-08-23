import * as React from 'react';
import { App } from './app';
import { PageAComponent } from './pages/pageA';
import { PageBComponent } from './pages/pageB';
import { hashHistory, Router, Route, IndexRoute } from 'react-router';
import { MapPageComponent } from './pages/mapPage';

export const AppRouter: React.StatelessComponent<{}> = () => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={PageAComponent}/>
      <Route path="/pageA" component={PageAComponent}/>
      <Route path="/pageB" component={PageBComponent}/>
      <Route path="/mapPage" component={MapPageComponent}/>
    </Route>
  </Router>
);
