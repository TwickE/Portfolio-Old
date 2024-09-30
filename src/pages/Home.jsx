import Navbar from "../components/Navbar"

function Home() {
    return (
        <>
            <Navbar activeLink="home" />
            <h1>Home</h1>
            <div style={{width: "300px", height: "3000px", backgroundColor: "red"}}></div>
        </>
        
    )
}

export default Home