import React from "react";
import MainComponent from "../MainComponent";

function Section(props) {
  console.log("--------section----------", props);
  const { h2, children, text } = props.data;

  return (
    <div>
      <h2> {h2}</h2>
      {text && text}
      {children && <MainComponent data={children} />}
    </div>
  );
}

export default Section;
