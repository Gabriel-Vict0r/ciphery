import styled from "styled-components";
import { BtnGenerate } from "../Form/style";
import { mixinBtn } from "@/typescript/utils/mixins";

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