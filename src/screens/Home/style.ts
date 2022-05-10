import styled, { createGlobalStyle } from 'styled-components';
import Background from '../../assets/imgs/block-1-bg.png';

export const Style = createGlobalStyle`
    .goto-down {
        text-align: center;

        a {
            padding: 10px 20px;
            
            svg {
                position: relative;
                top: 0;
                transition: .4s;
            }

            &:hover > svg {
                top: 20px;
            }
        }
    }

    .block-1 {
        position: relative;
        display: flex;
        align-items: flex-end;
        
        height: 100vh;
        background-color: #000;
        background-image: url(${Background});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

        &__wrapper {
            margin: 0 0 100px 100px;

            > {
                text-transform: uppercase;
                font-family: 'Inter';
                color: #FFFFFF;
            }
            
            .block-1__label {
                font-weight: 500;
                font-size: 20px;
                line-height: 24px;
                margin-bottom: 20px;
            }
            
            .block-1__title {
                font-weight: 700;
                font-size: 48px;
                line-height: 58px;
            }
            
            .block-1__timeout {
                font-weight: 100;
                font-size: 48px;
                line-height: 58px;
                margin-bottom: 55px;
            }
        }

    }
    
    .block-2 {
        display: flex;
        justify-content: space-evenly;
        padding: 100px 0 110px;
        background-color: #000;

        &__wrapper {
            font-family: 'Inter';
            text-align: center;
            text-transform: uppercase;
            color: #FFFFFF;

            .block-2__quantity {
                font-weight: 400;
                font-size: 72px;
                line-height: 87px;
            }

            .block-2__label {
                font-weight: 300;
                font-size: 12px;
                line-height: 15px;
            }
        }
    }

    .block-3 {
        padding: 40px 100px 70px;
        background-color: #000;

        h2 {
            margin-bottom: 80px;
        }
    }
`;