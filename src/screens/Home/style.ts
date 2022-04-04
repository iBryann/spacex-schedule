import styled, { createGlobalStyle } from 'styled-components';

export const Style = createGlobalStyle`
    section {
        height: 100vh;

        &:nth-child(even) {
            background-color: orange;
        }
    }
`;