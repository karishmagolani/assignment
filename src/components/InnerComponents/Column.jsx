import React from "react";
import MainComponent from "../MainComponent";

function Col(props) {
  const { className, children } = props.data;
  console.log("col", className, props);

  return (
    <div className={className}>
      {children && <MainComponent data={children} />}
    </div>
  );
}

export default Col;
