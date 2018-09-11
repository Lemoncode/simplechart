import * as React from 'react';
import { promiseTrackerHoc } from 'react-promise-tracker';
import {RingLoader} from 'react-spinners';

interface MyProps {
  trackedPromiseInProgress?: boolean;
}

const InnerLoadingSpinerComponent: React.StatelessComponent<MyProps> = (props: MyProps) => {
   if (props.trackedPromiseInProgress === true) {
     return (
       <RingLoader color="#00d8ff" />
    );
  } else {return null; }
};
export const LoadingSpinnerComponent = promiseTrackerHoc(InnerLoadingSpinerComponent);
