import React from "react";
import ColumnWrapper from "./ColumnWrapper";

import Header from "./components/Header";
import Content from "./components/Content";
import AddItem from "../../organisms/AddItem";

const Column = ({ type, data, addItem, deleteItem }) => (
  <ColumnWrapper>
    <Header type={type} />
    <Content type={type} data={data} deleteItem={deleteItem} />
    <AddItem type={type} addItem={addItem} />
  </ColumnWrapper>
);

export default Column;
