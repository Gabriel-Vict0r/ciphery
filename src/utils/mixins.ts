import { css } from 'styled-components'

export const mixinBtn = css`
  border-radius: 4px;
  border: none;
  background-color: ${(color) => color.theme.colors.buttons};
  font-size: ${(size) => size.theme.fonts.btnGenerate};
  color: ${(color) => color.theme.colors.btnLetter};
  cursor: pointer;
`