import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {
    Button,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import MainNavBar from './MainNavBar'
import IsoConverter from '../util/IsoConverter'

const baseURL = 'https://localhost:7156/api/Itineraries'

const ViewItineraries = (props) => {
    const [itins, setItineraries] = React.useState(null)

    React.useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                setItineraries(response.data)
            }).catch((e) => {
                let x = {}
                x.blah = 'hello'
                x.bleh = 'world'
                setItineraries(x)
            })
    }, [])

    if (!itins) return (
        navigation()
    )
    
    return (
        <>
            {navigation()}
            <div>
                <TableContainer>
                    <Table variant='striped' colorScheme=''>
                        <TableCaption>
                            Passenger itineraries can be edited by clicking the "Edit" button next to one of the entries.
                        </TableCaption>
                        <Thead>
                            <Tr>
                                <Th>
                                    Flight
                                </Th>
                                <Th>
                                    Passenger
                                </Th>
                                <Th>
                                    Confirmation Code
                                </Th>
                                <Th>
                                    Date Created
                                </Th>
                                <Th>
                                    Date Updated
                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {itins.map((itin) => (
                                <React.Fragment key={itin.id}>
                                    <Tr>
                                        <Td>{IsoConverter.toDateOnly(itin.departure) + ': ' + itin.flightNumber}</Td>
                                        <Td>{itin.passengerFirstName + ' ' + itin.passengerLastName}</Td>
                                        <Td>{itin.confirmation}</Td>
                                        <Td>{IsoConverter.toDateOnly(itin.dateCreated)}</Td>
                                        <Td>{itin.dateUpdated.substring(0, 2) === "00" ? 'No Updates' : IsoConverter.toFullString(itin.dateUpdated)}</Td>
                                        <Td>
                                            <Link to='/'>
                                                <Button colorScheme='yellow' variant='solid'>
                                                    Edit
                                                </Button>
                                            </Link>
                                        </Td>
                                    </Tr>
                                </React.Fragment>
                            ))}
                        </Tbody>
                        <Tfoot>
                            <Tr>
                                <Th>
                                    Flight
                                </Th>
                                <Th>
                                    Passenger
                                </Th>
                                <Th>
                                    Confirmation Code
                                </Th>
                                <Th>
                                    Date Created
                                </Th>
                                <Th>
                                    Date Updated
                                </Th>
                            </Tr>
                        </Tfoot>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}

function navigation() {
    return (
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
    )
}

export default ViewItineraries