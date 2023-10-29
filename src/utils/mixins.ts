import { css } from 'styled-components'

export const mixinBtn = css`
  border-radius: 4px;
  border: none;
  background-color: ${(color) => color.theme.colors.buttons};
  font-size: ${(size) => size.theme.fonts.btnGenerate};
  color: ${(color) => color.theme.colors.btnLetter};
  cursor: pointer;
`

export const mixinContainers = css`
border: 1px solid ${(prop) => prop.theme.colors.bgInput};
  border-radius: 10px;
  padding: 2em;
  display: flex;
  flex-direction: column;
  gap: 2em;
`
export const mixinStandard = css`
  border: none;
  background-color: ${(bgInput) => bgInput.theme.colors.bgInput};
  font-size: ${(size) => size.theme.fonts.inputLength};
  color: ${(color) => color.theme.colors.labelColor};
  border-radius: 4px;
`;