import React from "react";
import QuoteForm from "./QuoteForm";
const EditQuote = (props) => {
  const { id, name, body, editItem, handleEdit } = props;

  const formSubmission = (formData) => {
    editItem(formData);
  };
  return (
    <div>
      <h1> edit quote</h1>
      <QuoteForm
        id={id}
        name={name}
        body={body}
        formSubmission={formSubmission}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default EditQuote;
