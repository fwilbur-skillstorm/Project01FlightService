import MainNavBar from "./MainNavBar"

const DeleteFlight = (props) => {
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
            This is the delete flight page.
        </p>
        </>
    )
}

export default DeleteFlight