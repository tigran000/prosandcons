import React from "react";
import Item from "../../../../organisms/Item";

import ContentWrapper from "./ContentWrapper";

function Content({ type, data, deleteItem }) {
  return (
    <ContentWrapper>
      {data.map((text, index) => (
        <Item
          type={type}
          key={text}
          text={text}
          deleteItem={deleteItem}
          index={index}
        />
      ))}
    </ContentWrapper>
  );
}

export default Content;
