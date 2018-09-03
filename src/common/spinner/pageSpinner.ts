import Router from 'next/router'
import { start, done } from 'nprogress';

let alreadySetup = false;

export const setupPageSpinner = () => {
  if(!alreadySetup) {
    Router.onRouteChangeStart = () => {
      console.log('----- start');
      start();
    }
  
    Router.onRouteChangeComplete = () => {
      console.log('----- complete');
      done();
    }
    Router.onRouteChangeError = () => {
      console.log('----- error');
      done();
    }  
  }

  alreadySetup = true;
}
