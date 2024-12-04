import { useCallback } from 'react';
import CV from '../assets/cv.pdf';

const useDownloadCV = () => {
    const downloadCV = useCallback(async () => {
        try {
            const options = {
                suggestedName: 'CV_Frederico_Silva.pdf',
                types: [
                    {
                        description: 'PDF Files',
                        accept: {
                            'application/pdf': ['.pdf'],
                        },
                    },
                ],
            };

            const handle = await window.showSaveFilePicker(options);
            const writable = await handle.createWritable();
            const response = await fetch(CV);
            const blob = await response.blob();
            await writable.write(blob);
            await writable.close();
        } catch (error) {
            console.error('Error saving file:', error);
        }
    }, []);

    return downloadCV;
};

export default useDownloadCV;