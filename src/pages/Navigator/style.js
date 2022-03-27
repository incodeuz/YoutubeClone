import styled from "styled-components";

const WrapperNavigator = styled.div`
  margin-top: 112px;
  margin-left: 240px;
  padding: 10px 0 10px 100px;
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  height: fit-content;
`;
const NavDisplayFlex = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const NavCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 25px;
  justify-content: space-between;
  width: 200px;
  height: 110px;
  background-color: #212121;
  color: white;
  margin: 0 4px 8px 4px;
  border-radius: 8px;
  h4 {
    font-family: "Roboto";
  }
  :hover {
    cursor: pointer;
  }
`;

const NavCardLogo = styled.img`
  width: 35px;
`;

const NavBody = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  h4 {
    color: black;
  }
`;

const NavBodyPopularAvtor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aqua;
  color: black;
  padding: 4px 8px;
  border-radius: 3px;
`;

const NavBodyTitle = styled.div`
  color: white;
  margin-right: 10px;
  font-size: 18px;
`;

const NavBodyCarouselData = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;
const NavBodyCardImg = styled.img`
  width: 270px;
  height: 170px;
  margin-bottom: 12px;
  margin-right: 15px;
  border-radius: 10px;
`;

const NavBodyCardTitle = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
`;
export {
  WrapperNavigator,
  NavBodyTitle,
  NavBodyPopularAvtor,
  NavBody,
  NavCardLogo,
  NavCard,
  NavDisplayFlex,
  NavBodyCarouselData,
  NavBodyCardImg,
  NavBodyCardTitle,
};
