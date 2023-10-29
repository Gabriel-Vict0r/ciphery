import { mixinContainers } from "@/typescript/utils/mixins";
import styled from "styled-components";
import { ContainerHS } from "../HashGenerated/style";
import { mixinStandard } from "@/typescript/utils/mixins";

export const WrapperFeat = styled.div`
  width: 30%;
  ${mixinContainers};
`;
export const WrapperFilters = styled(ContainerHS)`
  gap: 1em;
`;
export const BtnLength = styled.input`
  ${mixinStandard};
  font-weight: ${(weight) => weight.theme.fonts.weights.medium};
  text-indent: 1em;
  height: 41px;
  width: 25%;
`;
