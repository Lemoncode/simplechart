import * as React from 'react';
import './loadingSpinner.scss';
import { promiseTrackerHoc } from 'react-promise-tracker';
import {BeatLoader} from 'react-spinners';

interface MyProps {
  trackedPromiseInProgress?: boolean;
}

const InnerLoadingSpinerComponent: React.StatelessComponent<MyProps> = (props: MyProps) => {
   if (props.trackedPromiseInProgress === true) {
    return (
      <div className="loading">
        <BeatLoader
                  loading={props.trackedPromiseInProgress}
        />
      </div>
    );
  } else { return null; }
};
export const LoadingSpinnerComponent = promiseTrackerHoc(InnerLoadingSpinerComponent);
