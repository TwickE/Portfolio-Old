import { useState, useEffect } from 'react';

const useLoadImages = (skillsJSON) => {
    const [loadedImages, setLoadedImages] = useState({});
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const loadImages = async () => {
            const images = {};
            for (const skill of skillsJSON) {
                try {
                    const imageModule = await import(`../assets/skills-images/${skill.skillImage}`);
                    images[skill.skillImage] = imageModule.default;
                } catch (error) {
                    console.error(`Failed to load image: ${skill.skillImage}`, error);
                }
            }
            setLoadedImages(images);
            setSkills(skillsJSON);
        };
        loadImages();
    }, [skillsJSON]);

    return { skills, loadedImages };
};

export default useLoadImages;