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
        btnLetter: '#FAFAFA',
        bgOffBtnHash: '#18181B',
        bgOnBtnHash: 'rgba(251, 113, 133, 0.10)'
    },
    fonts: {
        titleLength: calc(40),
        subtitle: calc(20),
        tirdLength: calc(18),
        inputLength: calc(16),
        btnGenerate: calc(14),
        btnGenHash: calc(12),
        mediaScreen: {
            titleLength: calc(32),
            subtitle: calc(16),
            inputLength: calc(14),
            btnGenerate: calc(13),
        },
        weights: {
            extraBold: 800,
            medium: 400,
            semiBold: 600,
        }
    }
}