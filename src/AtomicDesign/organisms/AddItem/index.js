import React, { useState } from "react";
import Input from "../../atoms/Input";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import AddItemWrapper from "./AddItemWrapper";

function AddItem({ type, addItem }) {
  const [newItem, setNewItem] = useState("");
  const handleChange = event => setNewItem(event.target.value);
  return (
    <AddItemWrapper>
      <Input
        value={newItem}
        onChange={handleChange}
        placeholder={`Type new ${type}`}
      />
      <Fab
        color="primary"
        aria-label="add"
        size="small"
        onClick={() => {
          addItem(type, newItem);
          setNewItem("");
        }}
      >
        <AddIcon />
      </Fab>
    </AddItemWrapper>
  );
}

export default AddItem;
