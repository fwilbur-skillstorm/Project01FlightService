import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {
    Box,
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
import MainNavBar from "./MainNavBar"
import IsoConverter from '../util/IsoConverter'

const baseURL = 'https://localhost:7156/api'

const DeleteFlight = (props) => {
    const [flights, setFlights] = React.useState(null)

    React.useEffect(() => {
        axios.get(baseURL + '/Flights')
            .then((response) => {
                setFlights(response.data)
            }).catch((e) => {
                setFlights(null)
                console.log('Could not set flights because: ' + e.toString())
            })
    }, [])

    const beginDeletion = id => {
        console.log('flight id: ' + id)
        axios.delete(baseURL + '/Flights/' + id)
            .then((response) => {
                console.log(response.status)
                console.log(response.data)
                window.location.href = '/flights/view'
            })
            .catch((e) => {
                console.log('Could not DELETE itinerary: ' + e.toString())
                if(e.response) {
                    console.log(e.response)
                } else {
                    console.log(e)
                }
            })
    }

    if (!flights) return (
        <>{navigation()}</>
    )

    return (
        <>
            {navigation()}

            <hr />

            <div>
                <Box borderWidth='2px' borderRadius='xl' overflow='hidden' p={4}>
                    <TableContainer>
                        <Table variant='striped' colorScheme='blue'>
                            <TableCaption>
                                Flights can be edited by clicking the "Delete" button next to one of the entries.
                            </TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>
                                        Flight Number
                                    </Th>
                                    <Th>
                                        Origin
                                    </Th>
                                    <Th>
                                        Departure Time
                                    </Th>
                                    <Th>
                                        Destination
                                    </Th>
                                    <Th>
                                        Arrival Time
                                    </Th>
                                    <Th>
                                        Maximum Capacity
                                    </Th>
                                    <Th>
                                        Date Created
                                    </Th>
                                    <Th>
                                        Last Updated
                                    </Th>
                                    <Th>
                                        Delete
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {flights.map((item) => (
                                    <React.Fragment key={item.id}>
                                        <Tr>
                                            <Td>{item.id}</Td>
                                            <Td>{item.origin.airportCode}</Td>
                                            <Td>{item.departure}</Td>
                                            <Td>{item.destination.airportCode}</Td>
                                            <Td>{item.arrival}</Td>
                                            <Td>{item.capacity}</Td>
                                            <Td>{IsoConverter.toDateOnly(item.dateCreated)}</Td>
                                            <Td>{item.dateUpdated.substring(0, 2) === "00" ? 'No Updates' : IsoConverter.toFullString(item.dateUpdated)}</Td>
                                            <Td>
                                                <Link to='/flights/view'>
                                                    <Button id={item.id} colorScheme='red' variant='solid' onClick={e => beginDeletion(e.target.id)}>
                                                        Delete
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
                                        Flight Number
                                    </Th>
                                    <Th>
                                        Origin
                                    </Th>
                                    <Th>
                                        Departure Time
                                    </Th>
                                    <Th>
                                        Destination
                                    </Th>
                                    <Th>
                                        Arrival Time
                                    </Th>
                                    <Th>
                                        Maximum Capacity
                                    </Th>
                                    <Th>
                                        Date Created
                                    </Th>
                                    <Th>
                                        Last Updated
                                    </Th>
                                    <Th>
                                        Delete
                                    </Th>
                                </Tr>
                            </Tfoot>
                        </Table>
                    </TableContainer>
                </Box>
            </div>
        </>
    )
}

function navigation() {
    return (
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
    )
}

export default DeleteFlight