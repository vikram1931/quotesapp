import React from "react";
import QuotesItem from "./QuotesItem";
const QuotesList = (props) => {
  const { quotes, removeItem, editItem } = props;
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
          <h1>
            {quotes.map((quote) => {
              return (
                <QuotesItem
                  key={quote.id}
                  {...quote}
                  removeItem={removeItem}
                  editItem={editItem}
                />
              );
            })}
          </h1>
        </>
      )}
    </div>
  );
};

export default QuotesList;
