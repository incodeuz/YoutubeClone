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
  width: 290px;
  height: 170px;
  margin-bottom: 12px;
`;

const CardTitle = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 12px;
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

const DisplayFlex = styled.div`
  display: flex;
  align-items: center;
`;

const DisplayFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
export {
  BodyCon,
  DisplayFlex,
  CardCon,
  CardImg,
  CardTitle,
  CardName,
  DisplayFlexColumn,
};
