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
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1299px) {
        @media (min-width: 1100px) {
            justify-content: flex-end;
        }
    }
    @media (max-width: 767px) {
        height: 60px;
    }

    &.hidden {
        .header-overlay {
            transform: translateY(-110%);
        }

        @media (min-width: 768px) {
            .logo, .wrapper-nav-mobile > button {
                opacity: 0;
            }
        }

        .nav-desktop {
            opacity: 0;
        }
    }

    .header-overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #000;
        transform: translateY(0);
        transition: transform .4s ease-in-out;

        &.min-scroll {
            transform: translateY(-110%);
        }

        @media (max-width: 767px) {
            display: none;
        }
    }

    .logo, .nav-desktop {
        z-index: 1;
        opacity: 1;
        transition: opacity .2s ease-in-out;
    }

    .logo {
        a {
            img {
                width: 210px;
            }
        }

        @media (max-width: 767px) {
            a {
                img {
                    width: 150px;
                }
            }
        }

        @media (min-width: 1100px) {
            position: absolute;
            top: 47%;
            left: 50px;
            transform: translateY(-50%);
        }
    }

    .nav-desktop {
        @media (max-width: 1299px) {
            @media (min-width: 1099px) {
                margin-right: 50px
            }
        }

        @media (max-width: 1099px) {
            display: none;
        }

        ul {
            display: flex;

            li {
                display: block;
                margin-right: 15px;
                
                &:last-child {
                    margin-right: 0;
                }

                a {
                    color: #fff;
                    text-decoration: none;
                    white-space: nowrap;
                    padding: 0;
                }
            }
        }
    }
    
    .wrapper-nav-mobile {

        @media (min-width: 1100px) {
            display: none;
        }

        &.show {
            .body-overlay {
                opacity: 1;
                pointer-events: all;
            }

            .nav-mobile {
                right: 0;
                
                li {
                    &:nth-child(1) { animation: anim_menu_item .7s 0.80s ease-in-out forwards; }
                    &:nth-child(2) { animation: anim_menu_item .7s 0.85s ease-in-out forwards; }
                    &:nth-child(3) { animation: anim_menu_item .7s 0.90s ease-in-out forwards; }
                    &:nth-child(4) { animation: anim_menu_item .7s 0.95s ease-in-out forwards; }
                    &:nth-child(5) { animation: anim_menu_item .7s 1.00s ease-in-out forwards; }
                    &:nth-child(6) { animation: anim_menu_item .7s 1.05s ease-in-out forwards; }
                }
                
                @keyframes anim_menu_item {
                    to {
                        bottom: 0;
                        opacity: 1;
                    }
                }
            }
        }

        .body-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            opacity: 0;
            pointer-events: none;
            background-color: rgba(0, 0, 0, .5);
            transform: translateY(0);
            transition: transform .4s ease-in-out, opacity 1s;
        }

        button {
            z-index: 1;
            position: absolute;
            top: 50%;
            right: 50px;
            border: none;
            padding: 4px 10px;
            margin-right: -10px;
            background-color: transparent;
            transform: translateY(-50%);
            cursor: pointer;

            @media (max-width: 767px) {
                right: 20px;
            }
            
            &.show > .menu {
                .bar{
                    &:nth-of-type(1){
                        top: 8px;
                        transform: rotate(45deg);
                        transition: top .3s ease .1s, transform .3s ease-out .5s;
                    }
                    &:nth-of-type(2){
                        opacity: 0;
                    }
                    &:nth-of-type(3){
                        top: 8px;
                        transform: rotate(-45deg);
                        transition: top .3s ease .1s, transform .3s ease-out .5s;
                    }
                }
            }

            .menu{
                position: relative;
                height: 18px;
                width: 20px;
                transition: .3s;

                .bar{
                    position: absolute;
                    display: block;
                    height: 2px;
                    width: 100%;
                    background-color: #fff;
                    transition: .4s;
                
                    &:nth-of-type(1){ 
                        top: 3px;
                        transition: top .3s ease .3s, transform .3s ease-out .1s;
                        animation: 2s cubic-bezier(.5, .2, .2, 1.01);
                    }
                    &:nth-of-type(2){ 
                        top: 8px;
                        transition: .3s ease .3s;
                        animation: 2s cubic-bezier(.5, .2, .2, 1.01);
                    }
                    &:nth-of-type(3){
                        top: 13px;
                        transition: top .3s  ease .3s, transform .3s ease-out .1s;
                        animation: 2s cubic-bezier(.5, .2, .2, 1.01);
                    }
                }
            }

            
            @keyframes mrotr {
                0%{ transform: translateY(0px) rotate(0) }
                50%{ transform: translateY(15px) rotate(0) }
                100%{ transform: translateY(15px) rotate(45deg) }
            }
            @keyframes mrotl {
                0%{ transform: translateY(0px) rotate(0) }
                50%{ transform: translateY(-15px) rotate(0) }
                100%{ transform: translateY(-15px) rotate(-45deg) }
            }
            @keyframes fade {
                from{opacity: 1;}
                to{opacity: 0;}
            }
        }

        .nav-mobile {
            position: fixed;
            top: 0;
            right: -110%;
            display: flex;
            transition: right 1s cubic-bezier(.65, .05, .36, 1);

            ul {
                width: 250px;
                height: 100vh;
                padding: 75px 50px 50px;
                background-color: #000;

                @media (max-width: 767px) {
                    padding: 75px 20px 50px;
                }

                li {
                    position: relative;
                    bottom: -100px;
                    opacity: 0;
                    text-align: right;
                    border-bottom: 1px solid #252525;
                    transition: 1s cubic-bezier(.25,1,.25,1);
                    
                    &:hover {
                        border-bottom: 1px solid #fff;
                        
                        a {
                            color: #8b939b;
                        }
                    }
                    
                    a {
                        display: block;
                        color: #fff;
                        font-family: sans-serif;
                        font-size: 15px;
                        font-weight: 300;
                        line-height: 40px;
                        text-transform: uppercase;
                        text-decoration: none;
                        white-space: nowrap;
                        padding: 0;
                        transition: 1s cubic-bezier(.25,1,.25,1);
                    }
                }
            }
        }
    }
`;