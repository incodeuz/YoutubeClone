import styled from "styled-components";
import { StyleSheetManager } from "styled-components";

const BodyCon = styled.div`
  margin-left: ${({ logo }) => (logo ? "240px" : "0")};
  margin-top: 56px;
  display: flex;
  flex-wrap: wrap;
  transition: all 0.4s;
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
  margin-bottom: 12px;
`;

const CardTitle = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

const CardName = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
`;

export { BodyCon, CardCon, CardImg, CardTitle,CardName };
