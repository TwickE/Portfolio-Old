import { useNavigate, useLocation } from 'react-router-dom';
import { useCallback } from 'react';

const useNavigateHome = (path = '/') => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogoClick = useCallback(() => {
        if (location.pathname !== path) {
            navigate(path);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location.pathname, navigate, path]);

    return handleLogoClick;
};

export default useNavigateHome;