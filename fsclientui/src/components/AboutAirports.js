import MainNavBar from "./MainNavBar"

const AboutAirports = (props) => {
    return (
        <>
            <MainNavBar
                homeText='Go Back Home'
                option1Url='/airports/view'
                option2Url='/airports/create'
                option3Url='/airports/delete'
                option4Url='/airports'
                option1Text='View and Edit Airports'
                option2Text='Create an Airport'
                option3Text='Delete an Airport'
                option4Text='How to Use'
            />

            <hr />

            <p>
                Welcome to the About Airports page!
            </p>
            <p>Airports are defined by a location name and a code. While airport codes 
                are typically only three characters long (all capital letters), you can 
                enter really anything you'd like.
            </p>
            <p>
                As with all categories (airports, flights, passengers, itineraries), you 
                can create new entries, delete old ones, update existing ones, and view 
                all of the existing entries as a giant list.
            </p>
        </>
    )
}

export default AboutAirports