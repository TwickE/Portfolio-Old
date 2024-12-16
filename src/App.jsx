import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, Suspense, lazy } from 'react';
import Spinner from './components/sub-components/Spinner/Spinner';
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

const ROUTES = {
    '/': "Fred's Portfolio",
    '/about': 'About',
    '/projects': 'Projects',
    '/contact': 'Contact'
};

function App() {
    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname;
        const baseTitle = "Fred's Portfolio";
        
        const pageTitle = currentPath === '/'
            ? ROUTES['/']
            : ROUTES[currentPath]
                ? `${ROUTES[currentPath]} - ${baseTitle}`
                : `404 Not Found - ${baseTitle}`;
            
        document.title = pageTitle;
    }, [location]);

    return (
        <Suspense fallback={<Spinner />}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about/*' element={<About />} />
                <Route path='/projects/*' element={<Projects />} />
                <Route path='/contact/*' element={<Contact />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Suspense>
    )
}

export default App
