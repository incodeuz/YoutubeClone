import styled from "styled-components";

const BodyCon = styled.div`
  margin-left: ${({ logo }) => (logo ? "240px" : "0")};
  display: flex;
  flex-wrap: wrap;
  transition: all 0.4s;
  background-color: #181818;
  margin-top: 112px;
`;

const CardCon = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
  height: fit-content;
  flex-wrap: wrap;
  margin: 10px 13px;
  margin-bottom: 30px;
  padding: 0 15px;
`;

const CardImg = styled.img`
  width: 270px;
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
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  margin-bottom: 4px;
`;

const DisplayFlex = styled.div`
  display: flex;
  /* align-items: center; */
`;

const DisplayFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardChannelName = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 2px;
  color: rgba(255, 255, 255, 0.6);
`;

const CardViews = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: rgba(255, 255, 255, 0.6);
`;
const CardWhenPosted = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: rgba(255, 255, 255, 0.6);
  margin-left: 6px;
  padding-left: 6px;
  border-left: 1px solid gray;
`;

export {
  BodyCon,
  DisplayFlex,
  CardCon,
  CardImg,
  CardTitle,
  CardName,
  DisplayFlexColumn,
  CardChannelName,
  CardViews,
  CardWhenPosted,
};
