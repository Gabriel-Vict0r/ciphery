import { mixinBtn } from "@/typescript/utils/mixins";
import styled from "styled-components";
import { css } from "styled-components";
import { mixinStandard } from '@/typescript/utils/mixins';
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
  cursor: pointer;
  font-size: ${(size) => size.theme.fonts.subtitle};
`;

export const BtnGenerate = styled.button`
  width: 14%;
  ${mixinBtn};
`;
