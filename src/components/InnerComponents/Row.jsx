import React from "react";
import MainComponent from "../MainComponent";

function Row(props) {
  console.log("row", props);
  const { valign, className, children } = props.data;
  return (
    <div className={className}>
      <MainComponent data={children} />
    </div>
  );
}

export default Row;
