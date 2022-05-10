import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    button {
        position: relative;
        padding: 20px 30px;
        border: 2px solid #fff;
        text-decoration: none;
        background-color: transparent;

        * {
            cursor: pointer;
        }

        &:hover {
            .hover {
                transform: scaleY(1);
                transform-origin: bottom center;
            }

            .text {
                color: #000;
            }
        }

        .hover {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #fff;
            transform: scaleY(0);
            transform-origin: top center;
            transition: transform .6s cubic-bezier(.19,1,.22,1);
        }

        .text {
            position: relative;
            width: 100%;
            color: #fff;
            font-family: sans-serif;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: color .5s cubic-bezier(.19,1,.22,1);
        }
    }
`;
