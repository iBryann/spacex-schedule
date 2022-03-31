import styled from 'styled-components';

export const HeaderMargin = styled.div`
    height: 100px;
`;

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100px;

    &.hidden {
        .overlay {
            transform: translateY(-110%);
        }

        #logo, #navigation {
            opacity: 0;
        }
    }

    .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #000;
        transform: translateY(0);
        transition: transform .4s ease-in-out;
    }

    #logo, #navigation {
        opacity: 1;
        transition: opacity .2s ease-in-out;
    }

    #logo {
        z-index: 2;
        position: absolute;
        top: 47%;
        left: 50px;
        transform: translateY(-50%);

        a {
            img {
                width: 210px;
            }
        }
    }

    #navigation {
        z-index: 2;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        ul {
            display: flex;

            li {
                display: block;
                margin-right: 12px;

                &:last-child {
                    margin-right: 0;
                }

                a {
                    color: #fff;
                    text-decoration: none;
                    white-space: nowrap;
                }
            }
        }
    }
`;