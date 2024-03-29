import MainNavBar from "./MainNavBar"
import './About.css'

const AboutFlights = (props) => {
    return (
        <>
            <MainNavBar
                homeText='Go Back Home'
                option1Url='/flights/view'
                option2Url='/flights/create'
                option3Url='/flights/delete'
                option4Url='/flights'
                option1Text='View and Edit Flights'
                option2Text='Create a Flight'
                option3Text='Delete a Flight'
                option4Text='How to Use'
            />

            <hr />

            <div className='exposition'>
            <h2>
                Welcome to the Flights page!
            </h2>
            <p>
                Flights have an origin an destination, and departure time and 
                arrival time. The origin and destination borrow from the airports.
            </p>
            <p>
                As with all categories (airports, flights, passengers, itineraries), you 
                can create new entries, delete old ones, update existing ones, and view 
                all of the existing entries as a giant list.
            </p>
            </div>
        </>
    )
}

export default AboutFlights