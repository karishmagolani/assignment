import React from "react";
import MainComponent from "../MainComponent";

function Card(props) {
  const { title, link, children, text } = props.data;

  return (
    <div>
      <h2>
        <a href={link}>{title}</a>
      </h2>
      {text && text}
      {children && <MainComponent data={children} />}
    </div>
  );
}

export default Card;
