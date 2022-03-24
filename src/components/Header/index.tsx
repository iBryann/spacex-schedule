
import { Link as LinkRouter } from "react-router-dom";

import { Link } from "../Link";
import { Container, HeaderMargin } from "./style";
import Logo from '../../assets/imgs/logo.svg';
import { useState } from "react";

export const Header = () => {
    let showOverlay = true;
    let lastScrollY = 0;

    window.addEventListener('scroll', (event: Event) => {
        const e: Window = event.currentTarget as Window;
        
        console.log(e.screenY);
    });
    
    return (
        <>
            <Container show={showOverlay}>
                <div className="overlay active"></div>
                
                <div id="logo">
                    <LinkRouter to="/">
                        <img src={Logo} alt="SpaceX logo" />
                    </LinkRouter>
                </div>

                <nav id="navigation">
                    <ul>
                        <li><Link to="/" text="FALCON 9" /></li>
                        <li><Link to="/about" text="FALCON HEAVY" /></li>
                        <li><Link to="/users" text="DRAGON" /></li>
                        <li><Link to="/error" text="STARSHIP" /></li>
                        <li><Link to="/" text="HUMAN SPACEFLIGHT" /></li>
                        <li><Link to="/" text="RIDESHARE" /></li>
                    </ul>
                </nav>
            </Container>

            <HeaderMargin />
        </>
    );
};