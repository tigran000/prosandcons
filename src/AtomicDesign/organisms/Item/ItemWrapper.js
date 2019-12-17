import styled from "styled-components";

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  border-bottom: 1px solid gray;

  @media only screen and (max-width: 480px) {
    font-size: 10px;
  }
`;

export default ItemWrapper;
