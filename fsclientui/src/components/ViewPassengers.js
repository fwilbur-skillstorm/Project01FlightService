import MainNavBar from "./MainNavBar"

const ViewPassengers = (props) => {
    return (
        <>
            <MainNavBar
                homeText='Go Back Home'
                option1Url='/passengers/view'
                option2Url='/passengers/create'
                option3Url='/passengers/delete'
                option4Url='/passengers'
                option1Text='View Passengers'
                option2Text='Create a Passenger'
                option3Text='Delete a Passenger'
                option4Text='How to Use'
            />
            <p>
                This is the view passengers page.
            </p>
        </>
    )
}

export default ViewPassengers