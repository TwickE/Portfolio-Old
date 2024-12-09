import "./Spinner.css";
import HashLoader from "react-spinners/HashLoader";
import { useState, useEffect } from 'react';

function Spinner() {
    const [showSpinner, setShowSpinner] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSpinner(true);
        }, 150);

        return () => clearTimeout(timer);
    }, []);

    if (!showSpinner) return null;

    return (
        <main className="spinner">
            <div>
                <HashLoader
                    color={"#283AFF"}
                    loading={true}
                    size={150}
                    aria-label="Loading Spinner"
                />
                <h1>Loading</h1>
            </div>
        </main>
    )
}

export default Spinner