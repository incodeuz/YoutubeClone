import styled from "styled-components";

const FootNavCon = styled.div`
  padding-right: ${({ logo }) => (logo ? "240px" : 0)};
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
  height: 56px;
  position: fixed;
  transition: all 0.3s;
  top: 56px;
  background: #212121;
  border-bottom: 1px solid gray;
  border-top: 1px solid gray;
  margin-left: ${({ logo }) => (logo ? "240px" : "0")};
`;
const FootCard = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-sizing: border-box;
  border-radius: 30px;
  color: white;
  padding: 5px 10px;
  flex-wrap: wrap;
  margin: 0 5px;
  :hover {
    cursor: pointer;
  }
`;

export { FootNavCon, FootCard };
