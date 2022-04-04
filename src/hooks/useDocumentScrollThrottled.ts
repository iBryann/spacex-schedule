import { useEffect, useState } from 'react';
import { throttle } from 'lodash';

interface IProps {
    previousScrollTop: number,
    currentScrollTop: number,
    clientHeight: number
}

export default function useDocumentScrollThrottled(callback: ({}: IProps) => void) {
    const [, setScrollPosition] = useState(0);
    let previousScrollTop = 0;

    function handleDocumentScroll() {
        const { scrollTop: currentScrollTop, clientHeight } = document.documentElement || document.body;

        setScrollPosition(previousPosition => {
            previousScrollTop = previousPosition;
            return currentScrollTop;
        });

        callback({ previousScrollTop, currentScrollTop, clientHeight });
    }

    const handleDocumentScrollThrottled = throttle(handleDocumentScroll, 250);

    useEffect(() => {
        window.addEventListener('scroll', handleDocumentScrollThrottled);

        return () => window.removeEventListener('scroll', handleDocumentScrollThrottled);
    }, []);
}