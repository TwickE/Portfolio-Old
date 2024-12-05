import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, Suspense, lazy } from 'react';
import Spinner from './components/sub-components/Spinner/Spinner';
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));
import "animate.css/animate.compat.css"

function App() {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        let title = 'Fred\'s Portfolio';

        if (path === '/') {
            title = 'Home - Fred\'s Portfolio';
        } else if (path.startsWith('/about')) {
            title = 'About - Fred\'s Portfolio';
        } else if (path.startsWith('/projects')) {
            title = 'Projects - Fred\'s Portfolio';
        } else if (path.startsWith('/contact')) {
            title = 'Contact - Fred\'s Portfolio';
        } else {
            title = '404 Not Found - Fred\'s Portfolio';
        }

        document.title = title;
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
