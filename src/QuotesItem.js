import React from "react";

const QuotesItem = (props) => {
  const { id, name, body } = props;
  return (
    <div>
      <h1>
        {body} -{name}
      </h1>
    </div>
  );
};

export default QuotesItem;
