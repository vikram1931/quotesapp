import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";
import QuotesList from "./QuotesList";
import QuoteForm from "./QuoteForm";
const QuotesContainer = () => {
  const [quotes, setQuotes] = useState([]);

  const addItem = (quote) => {
    const result = [...quotes, quote];
    setQuotes(result);
  };

  const paperStyle = { padding: "30px 20px" };
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Paper elevation={24} style={paperStyle}>
          <QuotesList quotes={quotes} />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper elevation={24} style={paperStyle}>
          <QuoteForm addItem={addItem} />

          {
            //  <AddQuote quotes={quotes} addItem={addItem} />
          }
        </Paper>
      </Grid>
    </Grid>
  );
};

export default QuotesContainer;
