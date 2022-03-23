/** @format */

import styled from "styled-components";

const SidebarCon = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100vh;
  background: #212121;
  position: fixed;
  top: 56px;
  left: 0px;
  padding-top:10px;
`;

const ItemsCon = styled.div`
  height: 40px;
  width: 100%;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  :hover {
    background: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
`;
const ItemsConTwo = styled.div`
  border-bottom: 1px solid gray;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? "10px" : 0)};
  padding-bottom: ${({ marginBottom }) => (marginBottom ? "10px" : 0)};
`;
const ItemIcon = styled.img`
  width: 16px;
  margin-left: 28px;
  margin-right: 28px;
`;

const ItemTitle = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
`;

export { SidebarCon, ItemIcon, ItemsCon, ItemTitle, ItemsConTwo };
