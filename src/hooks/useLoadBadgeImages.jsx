import { useState, useEffect } from 'react';

const useLoadBadgeImages = (badges) => {
    const [loadedImages, setLoadedImages] = useState({});

    useEffect(() => {
        const loadImages = async () => {
            const images = {};
            for (const badge of badges) {
                try {
                    const imageModule = await import(`../assets/skills-images/${badge.badgeImage}`);
                    images[badge.badgeTitle] = imageModule.default;
                } catch (error) {
                    console.error(`Failed to load image: ${badge.badgeImage}`, error);
                }
            }
            setLoadedImages(images);
        };
        loadImages();
    }, [badges]);

    return loadedImages;
};

export default useLoadBadgeImages;