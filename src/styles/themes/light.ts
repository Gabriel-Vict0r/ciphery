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
        borderActive: '#FB7185'
    },
    fonts: {
        titleLength: calc(40),
        subtitle: calc(20),
        tirdLength: calc(18),
        inputLength: calc(16),
        weights: {
            extraBold: 800,
            medium: 400,
            semiBold: 600,

        }
    }
}