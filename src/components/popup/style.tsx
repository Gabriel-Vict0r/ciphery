import styled from "styled-components";

import calc from "../../utils/calc";

export const BgModal = styled.div`
  width: 100vw;
  /* height: 100%; */
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: ${(prop) => prop.theme.colors.popUp.bgModal};
  z-index: 1;
  display: flex;
`;
export const ContainerPop = styled.div`
  position: absolute;
  top: 35%;
  left: 35%;
  width: 35%;
  /* height: 25%; */
  background-color: ${(prop) => prop.theme.colors.popUp.bgpop};
  border-radius: 18px;
  padding: 1.5em;
  z-index: 999;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    width: 40%;
    height: 30%;
  }
  @media screen and (max-width: 425px) {
    left: 15%;
    width: 70%;
    height: 30%;
  }
`;
export const HeaderPop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1em;
  & svg {
    color: ${(color) => color.theme.colors.buttons};
    font-size: ${(color) => color.theme.fonts.poptitle};
    cursor: pointer;
  }
`;
export const TitlePop = styled.h2`
  color: ${(color) => color.theme.colors.popUp.title};
  font-size: ${(color) => color.theme.fonts.poptitle};
`;
export const FirstMessage = styled.p`
  color: ${(prop) => prop.theme.colors.popUp.text};
  font-size: ${(prop) => prop.theme.fonts.inputLength};
  font-weight: 600;
  margin-bottom: 0.5em;
`;
export const SecondMessage = styled.p`
  color: ${(prop) => prop.theme.colors.popUp.text};
  font-size: ${(size) => size.theme.fonts.btnGenerate};
`;
