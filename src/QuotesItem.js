import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const QuotesItem = (props) => {
  const { id, name, body, removeItem } = props;
  return (
    <div>
      <blockquote>
        {body} -{name}
        <EditIcon />
        <DeleteIcon
          onClick={() => {
            const confirmRemove = window.confirm("Are you sure ?");
            if (confirmRemove) {
              removeItem(id);
            }
          }}
        />
      </blockquote>
    </div>
  );
};

export default QuotesItem;
