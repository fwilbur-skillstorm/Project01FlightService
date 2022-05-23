import MainNavBar from "./MainNavBar"

const AboutPassengers = (props) => {
    return (
        <>
            <MainNavBar
                homeText='Go Back Home'
                option1Url='/passengers/view'
                option2Url='/passengers/create'
                option3Url='/passengers/delete'
                option4Url='/passengers'
                option1Text='View and Edit Passengers'
                option2Text='Create a Passenger'
                option3Text='Delete a Passenger'
                option4Text='How to Use'
            />

            <hr />

            <p>
                This is the Passengers page!
            </p>
            <p>
                A passenger has a first name, last name, career (possibly none), 
                and an age, which is derived from their date of birth. Oh, they 
                also have an email address, which you can click on in the view passenger 
                section to spin up an email to them.
            </p>
            <p>
                As with all categories (airports, flights, passengers, itineraries), you 
                can create new entries, delete old ones, update existing ones, and view 
                all of the existing entries as a giant list.
            </p>
        </>
    )
}

export default AboutPassengers