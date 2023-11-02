import styled from "styled-components";

export const Wrapper = styled.h1`
  font-size: ${(prop) => prop.theme.fonts.titleLength};
  color: ${(prop) => prop.theme.colors.titles};
  font-weight: ${(prop) => prop.theme.fonts.weights.extraBold};

  @media only screen and (max-width: 425px) {
    font-size: ${(prop) => prop.theme.fonts.mediaScreen.titleLength};
  }
`;
export const WrapperSub = styled.h2`
  font-size: ${(prop) => prop.theme.fonts.subtitle};
  color: ${(prop) => prop.theme.colors.subtitle};
  font-weight: ${(prop) => prop.theme.fonts.weights.medium};

  @media only screen and (max-width: 768px) {
    font-size: ${(prop) => prop.theme.fonts.mediaScreen.subtitle};
  }
`;
