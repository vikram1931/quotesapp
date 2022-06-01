import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Paper,
  TextField,
  Button,
  Typography,
  TextareaAutosize,
  FormControl,
} from "@mui/material";
const QuoteForm = (props) => {
  const { formSubmission, id: slNo, name: author, body: quote } = props;
  const [id, setId] = useState(slNo ? slNo : uuidv4);
  const [name, setName] = useState(author ? author : "");
  const [body, setBody] = useState(quote ? quote : "");

  const paperStyle = { padding: "30px 20px" };
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      // id: Number(new Date()),
      id: id,
      name: name,
      body: body,
    };
    formSubmission(formData);

    setName("");
    setBody("");
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
      <Paper elevation={24} style={paperStyle}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={name}
          onChange={handleNameChange}
        />
        <Typography variant="h1" />

        <TextareaAutosize
          aria-label="minimum height"
          minRows={3}
          placeholder="Body"
          style={{ width: 250 }}
          onChange={handleBodyChange}
          value={body}
        />
        <Typography variant="h1" />
        <Button variant="contained" onClick={handleSubmit}>
          submit
        </Button>
      </Paper>
    </div>
  );
};

export default QuoteForm;
