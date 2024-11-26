import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        window.scrollTo({top: 0, left:0, behavior: 'instant'});
        document.body.style.overflow = 'auto';
    }, [pathname]);

    return null;
}

export default ScrollToTop;