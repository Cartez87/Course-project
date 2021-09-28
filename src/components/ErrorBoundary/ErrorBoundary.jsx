import React from "react";
import ErrorText from '../../helper/utils/errortext';

import './ErrorBoundary.scss';

const ErrorBoundary = (props) => {
  
  let isOk = true;

  return <>{isOk ? props.children : <ErrorText />}</>
}

export default ErrorBoundary;