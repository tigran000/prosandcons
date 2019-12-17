import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  font-size: 1.5rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  background-color: ${props => (props.isPros ? "red" : "blue")};
  color: white;
`;

export default HeaderWrapper;
