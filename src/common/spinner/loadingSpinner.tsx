import * as React from 'react';
import './loadingSpinner.scss';
import { promiseTrackerHoc } from 'react-promise-tracker';
import {BeatLoader} from 'react-spinners';

interface MyProps {
  trackedPromiseInProgress?: boolean;
}

const InnerLoadingSpinerComponent: React.StatelessComponent<MyProps> = (props: MyProps) => {
   if (props.trackedPromiseInProgress === true) {
     console.log('loading')
    return (
      <div className="loading">
        <h1>Spinner</h1>
        <BeatLoader
                  loading={props.trackedPromiseInProgress}
        />
      </div>
    );
  } else { console.log('not loading'); return null; }
};
export const LoadingSpinnerComponent = promiseTrackerHoc(InnerLoadingSpinerComponent);
