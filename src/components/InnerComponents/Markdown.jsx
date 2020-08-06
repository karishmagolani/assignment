import React from "react";
import snarkdown from "snarkdown";

function Markdown(props) {
  const { text } = props.data;
  let md = text ? text : null;
  let html = md ? snarkdown(md) : null;

  return (
    <div>{html && <div dangerouslySetInnerHTML={{ __html: html }} />}</div>
  );
}

export default Markdown;
