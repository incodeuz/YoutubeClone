import styled from "styled-components";

const BodyCon = styled.div`
  margin-left: ${({ logo }) => (logo ? "240px" : "0")};
`;

export { BodyCon };
