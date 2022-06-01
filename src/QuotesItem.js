import React, { useState } from "react";
import EditQuote from "./EditQuote";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
const QuotesItem = (props) => {
  const { id, name, body, removeItem, editItem } = props;
  const [toggle, setToggle] = useState(false);

  const handleEdit = () => {
    const result = !toggle;
    setToggle(result);
  };

  const handleCancel = () => {
    const result = !toggle;
    setToggle(result);
  };
  return (
    <div>
      {toggle ? (
        <>
          <EditQuote
            id={id}
            name={name}
            body={body}
            editItem={editItem}
            handleEdit={handleEdit}
          />
          <Button variant="contained" onClick={handleCancel}>
            Cancel
          </Button>
        </>
      ) : (
        <>
          <blockquote>
            {body} -{name}
            <EditIcon onClick={handleEdit} />
            {
              //when we click on the editicon lets show the editcomponet or let's show the blockquote
            }
            <DeleteIcon
              onClick={() => {
                const confirmRemove = window.confirm("Are you sure ?");
                if (confirmRemove) {
                  removeItem(id);
                }
              }}
            />
          </blockquote>
        </>
      )}
    </div>
  );
};

export default QuotesItem;
