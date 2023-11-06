import { mixinContainers } from "@/typescript/utils/mixins";
import styled from "styled-components";
import { ContainerHS } from "../HashGenerated/style";
import { mixinStandard } from "@/typescript/utils/mixins";

export const WrapperFeat = styled.div`
  width: 30%;
  ${mixinContainers};

  @media only screen and (max-width: 425px) {
    width: 100%;
  }
`;
export const WrapperFilters = styled(ContainerHS)`
  gap: 1em;

  @media only screen and (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;
export const BtnLength = styled.input`
  ${mixinStandard};
  font-weight: ${(weight) => weight.theme.fonts.weights.medium};
  text-indent: 1em;
  height: 41px;
  width: 25%;
  outline: none;

  @media only screen and (max-width: 1024px) {
    width: 40%;
  }
  @media only screen and (max-width: 425px) {
    width: 30%;
  }
`;
