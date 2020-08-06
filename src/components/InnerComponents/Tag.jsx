import React from "react";

function Tag(props) {
  console.log("Tag---", props);
  const { children, className, tag } = props.data;
  const Tag = tag;
  return (
    <div className={className}>
      {children && children.lenght >= 1 ? (
        children.map((item, index) => {
          return <Tag key={index}>{item}</Tag>;
        })
      ) : (
        <Tag>{children}</Tag>
      )}
    </div>
  );
}

export default Tag;
