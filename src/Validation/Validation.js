import React from "react";

const validation = props => {
  let valResponse = "";

  if (props.textLength < 6) {
    valResponse = "Text too short";
  } else {
    valResponse = "Text long enough";
  }

  return (
    <div className="Validation">
      <p>{valResponse}</p>
    </div>
  );
};

export default validation;
