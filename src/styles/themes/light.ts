import calc from "@/typescript/utils/calc";
import { DefaultTheme } from "styled-components";

export const light: DefaultTheme = {
    title: 'light',
    colors: {
        background: '#FAFAFA',
        titles: '#27272A',
        subtitle: '#27272A',
        labelColor: '#3F3F46',
        buttons: '#F43F5E',
        bgInput: '#E4E4E7',
        borderOff: '#A1A1AA',
        borderActive: '#FB7185',
        btnLetter: '#FAFAFA',
        bgOffBtnHash: '#F4F4F5',
        bgOnBtnHash: 'rgba(251, 113, 133, 0.10)',
        popUp: {
            bgModal: 'rgba(0, 0, 0, 0.18)',
            bgpop: '#E4E4E7',
            title: '#27272A',
            text: '#3F3F46',
            btnClose: '#F43F5E',
        }
    },
    fonts: {
        titleLength: calc(40),
        poptitle: calc(24),
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