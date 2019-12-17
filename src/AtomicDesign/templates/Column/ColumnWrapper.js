import styled from "styled-components";

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 75vh;
  min-width: 25vw;
  box-shadow: -10px 4px 17px -10px rgba(0, 0, 0, 0.75);
  margin: 45px;

  @media only screen and (max-width: 480px) {
    margin: 5px;
  }
`;

export default ColumnWrapper;
