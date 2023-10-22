import styled from "styled-components";

export const ContainerNav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Content = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
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
`;
