import styled from 'styled-components';

export const Container = styled.div`
    display: inline;

    a {
        position: relative;
        display: inline-block;
        padding: 4px 0;
        text-decoration: none;

        .text {
            position: relative;
            width: 100%;
            color: #fff;
            font-family: sans-serif;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: color .5s cubic-bezier(.19,1,.22,1);
        }

        .hover {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 1px;
            background-color: #fff;
            transform: scaleX(0);
            transform-origin: right center;
            transition: transform .6s cubic-bezier(.19,1,.22,1);
        }

        &:hover {
            .hover {
                transform: scaleY(1);
                transform-origin: left center;
            }
        }
    }
`;
