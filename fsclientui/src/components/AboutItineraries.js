import MainNavBar from "./MainNavBar"

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
            <p>
                This is the about itineraries page.
            </p>
        </>
    )
}

export default AboutItineraries