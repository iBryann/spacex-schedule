import { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";

import { Link } from "../Link";
import { Container, HeaderMargin } from "./style";
import Logo from '../../assets/imgs/logo.svg';

import useDocumentScrollThrottled from '../../hooks/useDocumentScrollThrottled';


export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [headerState, setHeaderState] = useState(false);
    const [overlayState, setOverlayState] = useState(false);

    useDocumentScrollThrottled(callbackData => {
        const { previousScrollTop, currentScrollTop, clientHeight } = callbackData;
        const isScrolledDown = previousScrollTop < currentScrollTop;
        const isMinimumScrolled = currentScrollTop > clientHeight;

        setTimeout(() => {
            setOverlayState(currentScrollTop < clientHeight);
            setHeaderState(isScrolledDown && isMinimumScrolled);
        }, 100);
    });

    return (
        <>
            <Container className={`header ${(headerState && !toggleMenu) && 'hidden'}  `}>
                <div className={`header-overlay ${overlayState && 'min-scroll'}`}></div>

                <div className="logo">
                    <LinkRouter to="/" state={{nome: 'bryann'}}>
                        <img src={Logo} alt="SpaceX logo" />
                    </LinkRouter>
                </div>

                <nav className="nav-desktop">
                    <ul>
                        <li><Link to="/" text="FALCON 9" /></li>
                        <li><Link to="/about" text="FALCON HEAVY" /></li>
                        <li><Link to="/users" text="DRAGON" /></li>
                        <li><Link to="/error" text="STARSHIP" /></li>
                        <li><Link to="/" text="HUMAN SPACEFLIGHT" /></li>
                        <li><Link to="/" text="RIDESHARE" /></li>
                    </ul>
                </nav>
                
                <div className={`wrapper-nav-mobile ${toggleMenu && 'show'}`}>
                    <div
                        className="body-overlay"
                        onClick={() => setToggleMenu(v => !v)}
                    ></div>

                    <button
                        className={toggleMenu ? 'show' : ''}
                        onClick={() => setToggleMenu(v => !v)}
                        type="button"
                    >
                        <div className="menu">
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </button>

                    <nav className={`nav-mobile ${toggleMenu && 'show'}`}>
                        <ul>
                            <li><LinkRouter to="/">FALCON 9</LinkRouter></li>
                            <li><LinkRouter to="/about">FALCON HEAVY</LinkRouter></li>
                            <li><LinkRouter to="/users">DRAGON</LinkRouter></li>
                            <li><LinkRouter to="/error">STARSHIP</LinkRouter></li>
                            <li><LinkRouter to="/">HUMAN SPACEFLIGHT</LinkRouter></li>
                            <li><LinkRouter to="/">RIDESHARE</LinkRouter></li>
                        </ul>
                    </nav>
                </div>

            </Container>

            <HeaderMargin />
        </>
    );
};