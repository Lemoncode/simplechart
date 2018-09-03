import Document, { Head, Main, NextScript } from "next/document";
import {LoadingSpinnerComponent } from "../common/spinner";
import Router from 'next/router'
import { trackPromise } from 'react-promise-tracker';
import {setupPageSpinner} from '../common/spinner/pageSpinner';

setupPageSpinner();

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <LoadingSpinnerComponent />
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
