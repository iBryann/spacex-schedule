import { memo, useState } from "react";
import { Link as LinkRouter, useNavigate } from "react-router-dom";

import { Link } from "../Link";
import { Container } from "./style";
import Logo from '../../assets/imgs/logo.svg';

import useDocumentScrollThrottled from '../../hooks/useDocumentScrollThrottled';


const Header = () => {
    const navigate = useNavigate();
    const [toggleMenu, setToggleMenu] = useState(false);
    const [headerState, setHeaderState] = useState(false);
    const [overlayState, setOverlayState] = useState(false);
    const [transitioning, setTransitioning] = useState(false);
    const menuLinks = [
        {to: '/', text: 'FALCON 9'},
        {to: '/about', text: 'FALCON HEAVY'},
        {to: '/users', text: 'DRAGON'},
        {to: '/error', text: 'STARSHIP'},
        {to: '/', text: 'HUMAN SPACEFLIGHT'},
        {to: '/', text: 'RIDESHARE'},
    ];

    useDocumentScrollThrottled(callbackData => {
        const { previousScrollTop, currentScrollTop, clientHeight } = callbackData;
        const isScrolledDown = previousScrollTop < currentScrollTop;
        const isMinimumScrolled = currentScrollTop > clientHeight;

        setTimeout(() => {
            setOverlayState(currentScrollTop < clientHeight);
            setHeaderState(isScrolledDown && isMinimumScrolled);
        }, 100);
    });

    function navigateTo(to = '/') {
        setToggleMenu(false);
        setTransitioning(true);

        setTimeout(() => {
            navigate(to);
            setTransitioning(false);
        }, 800);
    }

    return (
        <>
            <Container className={`header ${(headerState && !toggleMenu) && 'hidden'} ${transitioning && 'transitioning'}  `}>
                <div className={`header-overlay ${overlayState && 'min-scroll'}`}></div>

                <div className="logo">
                    <LinkRouter to="/" state={{nome: 'bryann'}}>
                        <img src={Logo} alt="SpaceX logo" />
                    </LinkRouter>
                </div>

                <nav className="nav-desktop">
                    <ul>
                        {menuLinks.map(link =>
                            <li key={link.text}>
                                <Link onClick={() => navigateTo(link.to)} text={link.text} />
                            </li>
                        )}
                    </ul>
                </nav>
                
                <div className={`wrapper-nav-mobile ${toggleMenu && 'show'}`}>
                    <div className="body-overlay" onClick={() => setToggleMenu(v => !v)}></div>

                    <button
                        id="btn-menu"
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
                            {menuLinks.map(link =>
                                <li key={link.text}>
                                    <button onClick={() => navigateTo(link.to)}>{link.text}</button>
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>
            </Container>
        </>
    );
};

export default memo(Header);