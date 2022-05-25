import React, { useState } from "react";
import QuotesList from "./QuotesList";
import QuoteForm from "./QuoteForm";
const QuotesContainer = () => {
  const [quotes, setQuotes] = useState([]);
  return (
    <div>
      <h1>QuotesContainer</h1>
      <QuotesList quotes={quotes} />
      <QuoteForm />
    </div>
  );
};

export default QuotesContainer;
