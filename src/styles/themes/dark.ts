import calc from "@/typescript/utils/calc";
import { DefaultTheme } from "styled-components";

export const dark: DefaultTheme = {
    title: 'dark',
    colors: {
        background: '#18181B',
        titles: '#E4E4E7',
        subtitle: '#71717A',
        labelColor: '#A1A1AA',
        buttons: '#F43F5E',
        bgInput: '#27272A',
        borderOff: '#52525B',
        borderActive: '#FB7185',
        btnLetter: '#FAFAFA'

    },
    fonts: {
        titleLength: calc(40),
        subtitle: calc(20),
        tirdLength: calc(18),
        inputLength: calc(16),
        btnGenerate: calc(14),
        weights: {
            extraBold: 800,
            medium: 400,
            semiBold: 600,
        }
    }
}