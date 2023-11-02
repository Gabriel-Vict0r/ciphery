import { mixinContainers } from "@/typescript/utils/mixins";
import styled from "styled-components";

export const WrapperPass = styled.div`
  width: 70%;
  ${mixinContainers};

  @media screen and (max-width: 425px){
    width: 100%;
  }
`;
