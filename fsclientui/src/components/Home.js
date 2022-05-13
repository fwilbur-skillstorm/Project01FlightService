import MainNavBar from "./MainNavBar"


const Home = (props) => {
    return (
        <>
        <MainNavBar
            homeText='Home'
            option1Url='/flights'
            option2Url='/airports'
            option3Url='/passengers'
            option4Url='/itineraries'
            option1Text='Flights'
            option2Text='Airports'
            option3Text='Passengers'
            option4Text='Itineraries'
        />
        <p>
            This is the home page.
        </p>
        </>
    )
}

export default Home