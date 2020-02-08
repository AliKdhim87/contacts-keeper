import React, { Fragment } from "react";
import SpinnerIcon from "./Spinner-1s-200px.gif";
const Spinner = () => {
  return (
    <Fragment>
      <img
        src={SpinnerIcon}
        alt='Loading...'
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </Fragment>
  );
};

export default Spinner;
