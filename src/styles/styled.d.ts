import "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            background: string;
            titles: string;
            subtitle: string,
            labelColor: string;
            buttons: string;
            bgInput: string;
            borderOff: string;
            borderActive: string;
            btnLetter: string;
            bgOffBtnHash: string;
            bgOnBtnHash: string;
        },
        fonts: {
            titleLength: string,
            subtitle: string,
            tirdLength: string,
            inputLength: string,
            btnGenerate: string,
            btnGenHash: string,

            mediaScreen: {
                titleLength: string,
                subtitle: string;
                inputLength: string;
                btnGenerate: string;
            }
            weights: {
                extraBold: number
                medium: number
                semiBold: number
            }
        }
    }
}