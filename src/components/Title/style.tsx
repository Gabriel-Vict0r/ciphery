import styled from "styled-components";

export const Wrapper = styled.h1`
  font-size: ${(prop) => prop.theme.fonts.titleLength};
  color: ${(prop) => prop.theme.colors.titles};
`;