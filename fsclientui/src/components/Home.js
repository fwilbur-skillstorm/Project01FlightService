import MainNavBar from "./MainNavBar"


const Home = (props) => {
    return (
        <>
            {navigation()}
            <div>
                <p>
                    Welcome to Not-Actually-Deathtraps Helicopter Services, where we manage your flights.
                </p>
                <p>
                    The above navigation bar will update as you traverse the site. Simply click on 
                    the category you'd like to work with, and click Go Back Home as necessary when 
                    you need to work with another category.
                </p>
            </div>
        </>
    )
}

function navigation() {
    return (
        <div>
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

            <hr />

        </div>
    )
}

export default Home