import styled from "styled-components";
import { css } from "styled-components";
export const Label = styled.label`
  font-size: ${(size) => size.theme.fonts.subtitle};
  color: ${(color) => color.theme.colors.labelColor};
  font-weight: ${(weight) => weight.theme.fonts.weights.semiBold};
  display: block;
  margin-bottom: 1em;
`;
export const ContainerData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const mixinStandard = css`
  border: none;
  background-color: ${(bgInput) => bgInput.theme.colors.bgInput};
  font-size: ${(size) => size.theme.fonts.inputLength};
  color: ${(color) => color.theme.colors.labelColor};
  border-radius: 4px;
`;
export const Input = styled.input`
  ${mixinStandard};
  font-weight: ${(weight) => weight.theme.fonts.weights.medium};
  text-indent: 1em;
  height: 41px;
  width: 76%;
`;

export const BtnCopy = styled.button`
  ${mixinStandard};
  width: 6%;
  font-size: ${(size) => size.theme.fonts.subtitle};
`;

export const BtnGenerate = styled.input`
  width: 14%;
  border-radius: 4px;
  border: none;
  background-color: ${(color) => color.theme.colors.buttons};
  font-size: ${(size) => size.theme.fonts.btnGenerate};
  color: ${(color) => color.theme.colors.btnLetter};
  cursor: pointer;
`;
