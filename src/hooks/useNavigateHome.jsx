import { useNavigate, useLocation } from 'react-router-dom';
import { useCallback } from 'react';

const useNavigateHome = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogoClick = useCallback(() => {
        if (location.pathname !== '/') {
            navigate('/');
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location.pathname, navigate]);

    return handleLogoClick;
};

export default useNavigateHome;