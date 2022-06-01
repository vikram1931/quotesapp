import React, { useState, useEffect } from "react";
import { Grid, Paper } from "@mui/material";
import QuotesList from "./QuotesList";
import AddQuote from "./AddQuote";

const QuotesContainer = () => {
  const [quotes, setQuotes] = useState([]);

  const addItem = (quote) => {
    const result = [quote, ...quotes];
    //quotes order
    setQuotes(result);
  };

  const removeItem = (id) => {
    const result = quotes.filter((quote) => {
      return quote.id !== id;
    });
    setQuotes(result);
  };
  useEffect(() => {
    localStorage.setItem("quotes", JSON.stringify(quotes));
  }, [quotes]);

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("quotes")) || [];

    setQuotes(result);
  }, []);

  const editItem = (quote) => {
    const result = quotes.map((q) => {
      if (q.id === quote.id) {
        return { ...q, ...quote };
      } else {
        return { ...q };
      }
    });
    setQuotes(result);
  };

  const paperStyle = { padding: "30px 20px" };
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Paper elevation={24} style={paperStyle}>
          <QuotesList
            quotes={quotes}
            removeItem={removeItem}
            editItem={editItem}
          />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper elevation={24} style={paperStyle}>
          <AddQuote addItem={addItem} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default QuotesContainer;
