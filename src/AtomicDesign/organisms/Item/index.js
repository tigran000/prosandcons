import React from "react";
import ItemWrapper from "./ItemWrapper";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

function Item({ type, text, deleteItem, index }) {
  return (
    <ItemWrapper>
      <IconButton onClick={() => deleteItem(type, index)}>
        <DeleteIcon color="secondary" />
      </IconButton>
      {text}
    </ItemWrapper>
  );
}

export default Item;
