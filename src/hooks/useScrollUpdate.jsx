import { useEffect } from 'react';

function useScrollUpdate() {
    useEffect(() => {
        window.scrollBy(0, 1);
        setTimeout(() => {
            window.scrollBy(0, -1);
        }, 50);
    }, []);
}

export default useScrollUpdate