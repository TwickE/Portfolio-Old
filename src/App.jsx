import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react';
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        let title = 'My Portfolio'; // Default title

        if (path === '/') {
            title = 'Home - My Portfolio';
        } else if (path.startsWith('/about')) {
            title = 'About - My Portfolio';
        } else if (path.startsWith('/projects')) {
            title = 'Projects - My Portfolio';
        } else if (path.startsWith('/contact')) {
            title = 'Contact - My Portfolio';
        } else {
            title = '404 Not Found - My Portfolio';
        }

        document.title = title;
    }, [location]);

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about/*' element={<About />} />
            <Route path='/projects/*' element={<Projects />} />
            <Route path='/contact/*' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default App
