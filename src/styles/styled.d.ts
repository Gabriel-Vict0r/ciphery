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
        },
        fonts: {
            titleLength: string,
            subtitle: string,
            tirdLength: string,
            inputLength: string,
        }
    }
}