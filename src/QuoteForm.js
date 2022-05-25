import React, { useState } from "react";
import {
  Paper,
  TextField,
  Button,
  Typography,
  TextareaAutosize,
  FormControl,
} from "@mui/material";
const QuoteForm = () => {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const paperStyle = { padding: "30px 20px" };
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
          value={body}
          onChange={handleBodyChange}
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
