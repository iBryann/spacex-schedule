import styled from 'styled-components';

export const HeaderMargin = styled.div`
    height: 100px;
`;

export const Container = styled.div<{show: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100px;

    .overlay {
        position: absolute;
        width: 100%;
        height: ${props => props.show ? 100 : 0}%;
        background-color: #000;
        transition: .4s ease-out;
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