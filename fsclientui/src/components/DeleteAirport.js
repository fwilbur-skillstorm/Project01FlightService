import MainNavBar from "./MainNavBar"

const DeleteAirport = (props) => {
    return (
        <>
        <MainNavBar
            homeText='Go Back Home'
            option1Url='/airports/view'
            option2Url='/airports/create'
            option3Url='/airports/delete'
            option4Url='/airports'
            option1Text='View Airports'
            option2Text='Create an Airport'
            option3Text='Delete an Airport'
            option4Text='How to Use'
        />
        <p>
            This is the delete airport page.
        </p>
        </>
    )
}

export default DeleteAirport