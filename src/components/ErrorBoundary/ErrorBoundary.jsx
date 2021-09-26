import React from "react";

import './ErrorBoundary.scss';

const ErrorBoundary = (props) => {

  const ErrorText = () => {
    return <h2>Something wrong with App!</h2>
  }
  
  let isOk = true;

  return <>{isOk ? props.children : <ErrorText />}</>
}

export default ErrorBoundary;