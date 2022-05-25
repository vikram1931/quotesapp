import React, { useState } from "react";

const QuoteForm = () => {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      id: Number(new Date()),
      name: name,
      body: body,
    };
    console.log(formData);
  };

  const handleNameChange = (e) => {
    const result = e.target.value;

    setName(result);
  };

  const handleBodyChange = (e) => {
    const result = e.target.value;
    setBody(result);
  };

  return (
    <div>
      <h1>QuoteForm</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={handleNameChange} />
        <br />
        <textarea placeholder="body" onChange={handleBodyChange} />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default QuoteForm;
