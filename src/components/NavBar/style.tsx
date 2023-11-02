import styled from "styled-components";

export const ContainerNav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  /* @media only screen and (max-width: 425px) {
    justify-content: flex-start;
  } */
`;
export const Content = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1em;
  @media only screen and (max-width: 425px) {
    width: 60%;
  }
`;
export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    align-items: center;
  }
  @media only screen and (max-width: 425px) {
    align-items: flex-start;
  }
`;
export const ContainerIcons = styled.div`
  background-color: ${(prop) => prop.theme.colors.bgInput};
  padding: 0.7em;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  &:hover + a + svg {
    color: ${(prop) => prop.theme.colors.buttons};
  }
  @media only screen and (max-width: 768px) {
    padding: 0.3em;
    width: 45px;
    height: 45px;
  }
`;
