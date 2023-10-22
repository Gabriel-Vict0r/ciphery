import styled from "styled-components";

export const Wrapper = styled.h1`
  font-size: ${(prop) => prop.theme.fonts.titleLength};
  color: ${(prop) => prop.theme.colors.titles};
  font-weight: ${(prop) => prop.theme.fonts.weights.extraBold};
`;
export const WrapperSub = styled.h2`
  font-size: ${(prop) => prop.theme.fonts.subtitle};
  color: ${(prop) => prop.theme.colors.subtitle};
  font-weight: ${(prop) => prop.theme.fonts.weights.medium};
`;
