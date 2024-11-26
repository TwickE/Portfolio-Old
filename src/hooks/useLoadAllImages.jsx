import { useState, useEffect } from 'react';

const useLoadAllImages = () => {
    const [images, setImages] = useState({});

    useEffect(() => {
        const importAllImages = async () => {
            const imageModules = import.meta.glob('../assets/skills-images/*.webp');
            const loadedImages = {};

            for (const path in imageModules) {
                const module = await imageModules[path]();
                const imageName = path.split('/').pop();
                loadedImages[imageName] = module.default;
            }

            setImages(loadedImages);
        };

        importAllImages();
    }, []);

    return images;
};

export default useLoadAllImages;