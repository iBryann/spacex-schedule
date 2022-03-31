import React, { useState } from 'react';
import { Style } from './style';

import useDocumentScrollThrottled from './useDocumentScrollThrottled';

function Header() {
    const [headerState, setHeaderState] = useState(false);
    const MINIMUM_SCROLL = 80;
    const TIMEOUT_DELAY = 200;

    useDocumentScrollThrottled(callbackData => {
        const { previousScrollTop, currentScrollTop } = callbackData;
        const isScrolledDown = previousScrollTop < currentScrollTop;
        const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

        setTimeout(() => {
            setHeaderState(isScrolledDown && isMinimumScrolled);
        }, TIMEOUT_DELAY);
    });

    return (
        <>
            <Style />

            <header className={`header ${headerState ? 'hidden' : ''}`}>
                <div className="logo">Logo</div>
                <ul className="links">
                    <li className="link-item">home</li>
                    <li className="link-item">about</li>
                    <li className="link-item">join</li>
                </ul>
            </header>
        </>
    );
}

export default Header;