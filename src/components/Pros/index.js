import React from "react";
import Column from "../../AtomicDesign/templates/Column";

function Pros({ pros = [], addItem, deleteItem }) {
  return (
    <Column type="pros" data={pros} addItem={addItem} deleteItem={deleteItem} />
  );
}

export default Pros;
