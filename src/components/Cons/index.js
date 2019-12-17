import React from "react";
import Column from "../../AtomicDesign/templates/Column";

function Cons({ cons = [], addItem, deleteItem }) {
  return (
    <Column type="cons" data={cons} addItem={addItem} deleteItem={deleteItem} />
  );
}

export default Cons;
