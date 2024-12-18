import "./Spinner.css";
import FadeLoader from "react-spinners/FadeLoader";
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
                <FadeLoader
                    height={30}
                    margin={20}
                    radius={20}
                    width={8}
                    color={"#283AFF"}
                    loading={true}
                    aria-label="Loading Spinner"
                />
                <h1>Loading</h1>
            </div>
        </main>
    )
}

export default Spinner