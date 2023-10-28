import styled from "styled-components";
import { BtnGenerate } from "../Form/style";
import { mixinBtn } from "@/typescript/utils/mixins";
import { DetailedHTMLProps } from "react";

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
`;

export const ContainerHS = styled.div`
  margin-top: 1.5em;
  display: flex;
  flex-direction: row;
  gap: 2em;
`;
const getColors = (prop: any) =>
  prop.$active ? prop.theme.colors.borderActive : prop.theme.colors.borderOff;

const getBackGround = (prop: any) =>
  prop.$active ? prop.theme.colors.bgOnBtnHash : prop.theme.colors.bgOffBtnHash;
export const BtnTypeHash = styled.button<{ $active?: boolean }>`
  border-radius: 16px;
  width: 15%;
  padding: 10px 0;
  border: 1px solid ${getColors};
  //color: ${(color) => color.theme.colors.borderOff};
  color: ${getColors};
  font-weight: ${(weight) => weight.theme.fonts.weights.semiBold};
  font-size: ${(size) => size.theme.fonts.btnGenHash};
  background-color: ${getBackGround};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    border-color: ${(color) => color.theme.colors.buttons};
  }
`;
