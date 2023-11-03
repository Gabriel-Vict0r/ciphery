import styled from "styled-components";
import { BtnGenerate } from "../Form/style";
import { mixinBtn } from "@/typescript/utils/mixins";
import { DetailedHTMLProps } from "react";
export interface Button
  extends React.MouseEvent<HTMLButtonElement, MouseEvent> {
  name?: string;
}
//FUNCTIONS FOR SWITCH BETWEEN COLORS/BACKROUND - ACTIVE/OFF
const getColors = (prop: any) =>
  prop.$active ? prop.theme.colors.borderActive : prop.theme.colors.borderOff;

const getBackGround = (prop: any) =>
  prop.$active ? prop.theme.colors.bgOnBtnHash : prop.theme.colors.bgOffBtnHash;

export const BtnCopyHash = styled.button`
  width: 21%;
  ${mixinBtn};
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1em;
  align-items: center;
  font-size: ${(size) => size.theme.fonts.inputLength};
  & svg {
    font-size: ${(size) => size.theme.fonts.subtitle};
  }

  @media only screen and (max-width: 768px) {
    width: 28%;
  }
  @media only screen and (max-width: 425px) {
    width: 100%;
  }
`;

export const ContainerHS = styled.div`
  margin-top: 1.5em;
  display: flex;
  flex-direction: row;
  gap: 2em;
  @media only screen and (max-width: 425px) {
    gap: 1em;
  }
`;

export const BtnTypeHash = styled.button<{
  $active?: boolean;
  $width?: string;
}>`
  border-radius: 16px;
  width: ${(prop) => (prop.$width === "filter" ? "20%" : "15%")};
  padding: 10px 0;
  border: 1px solid ${getColors};
  //color: ${(color) => color.theme.colors.borderOff};
  color: ${getColors};
  font-weight: ${(weight) => weight.theme.fonts.weights.semiBold};
  font-size: ${(size) => size.theme.fonts.btnGenHash};
  background-color: ${getBackGround};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  //responsive
  @media only screen and (max-width: 1024px) {
    width: ${(prop) => (prop.$width === "filter" ? "40%" : "30%")};
  }
  @media only screen and (max-width: 425px) {
    width: ${(prop) => (prop.$width === "filter" ? "46%" : "30%")};
  }
  &:hover {
    border-color: ${(color) => color.theme.colors.buttons};
    color: ${(color) => color.theme.colors.buttons};
  }
`;
