import React from "react";

const QuotesList = (props) => {
  const { quotes } = props;
  return (
    <div>
      <h1>Quotes List</h1>
      {quotes.length === 0 ? (
        <>
          <h1>No quotes found</h1>
          <h2>Add your first quote</h2>
        </>
      ) : (
        <>
          <h1>MyQuotes -{quotes.length}</h1>
        </>
      )}
    </div>
  );
};

export default QuotesList;
