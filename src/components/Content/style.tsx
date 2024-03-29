import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 3em auto;
  gap: 1em;
  @media screen and (max-width: 425px) {
    flex-direction: column-reverse;
  }
`;
