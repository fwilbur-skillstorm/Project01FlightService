import MainNavBar from "./MainNavBar"

const CreateFlight = (props) => {
    return (
        <>
        <MainNavBar
            homeText='Go Back Home'
            option1Url='/flights/view'
            option2Url='/flights/create'
            option3Url='/flights/delete'
            option4Url='/flights'
            option1Text='View Flights'
            option2Text='Create a Flight'
            option3Text='Delete a Flight'
            option4Text='How to Use'
        />
        <p>
            This is the create flight page.
        </p>
        </>
    )
}

export default CreateFlight