import MainNavBar from "./MainNavBar"

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
            <p>
                This is the about flights page.
            </p>
        </>
    )
}

export default AboutFlights