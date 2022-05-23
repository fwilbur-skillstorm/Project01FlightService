import MainNavBar from "./MainNavBar"
import './About.css'

const AboutItineraries = (props) => {
    return (
        <>
            <MainNavBar
                homeText='Go Back Home'
                option1Url='/itineraries/view'
                option2Url='/itineraries/create'
                option3Url='/itineraries/delete'
                option4Url='/itineraries'
                option1Text='View and Edit Itineraries'
                option2Text='Create an Itinerary'
                option3Text='Delete an Itinerary'
                option4Text='How to Use'
            />

            <hr />

            <div className='exposition'>
            <h2>
                This is the about Itineraries page!
            </h2>
            <p>
                Itineraries contain flight information and passenger information, 
                and you'll notice, when creating or editing an itinerary, a lot 
                of the information will update for you automatically.
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

export default AboutItineraries