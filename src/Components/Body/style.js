import styled from "styled-components";

const BodyCon = styled.div`
  margin-left: ${({ logo }) => (logo ? "240px" : "0")};
  margin-top: 56px;
  display: flex;
  flex-wrap: wrap;
`;
const CardCon = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  margin: 10px 13px;
  margin-bottom: 30px;
`;

const CardImg = styled.img`
  width: 340px;
  height: 190px;
`;

export { BodyCon, CardCon, CardImg };
