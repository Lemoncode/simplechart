import * as React from 'react';
import { AppContainer } from 'react-hot-loader';
import App from './app';

const index = () => (
  <AppContainer>
    <App />
  </AppContainer>
);

if (module.hot) {
  module.hot.accept('./app', () => {
    index();
  });
}

export default index;
