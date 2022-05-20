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

const baseURL = 'https://localhost:7156/api/Flights'

const ViewFlights = (props) => {
    const [flights, setFlights] = React.useState(null)

    React.useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                setFlights(response.data)
            }).catch((e) => {
                setFlights(null)
            })
    }, [])

    if (!flights) return (
        navigation()
    )

    return (
        <>
            {navigation()}

            <hr />

            <div>
                <p>
                    {props.message}
                </p>
                <Box borderWidth='2px' borderRadius='xl' overflow='hidden' p={4}>
                    <TableContainer>
                        <Table variant='striped' colorScheme='blue'>
                            <TableCaption>
                                Flights can be edited by clicking the "Edit" button next to one of the entries.
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
                                        Edit
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {flights.map((flight) => (
                                    <React.Fragment key={flight.id}>
                                        <Tr>
                                            <Td>{flight.id}</Td>
                                            <Td>{flight.origin ? flight.origin.airportCode : ''}</Td>
                                            <Td>{flight.departure ? flight.departure : ''}</Td>
                                            <Td>{flight.destination ? flight.destination.airportCode : ''}</Td>
                                            <Td>{flight.arrival ? flight.arrival : ''}</Td>
                                            <Td>{flight.capacity}</Td>
                                            <Td>{IsoConverter.toDateOnly(flight.dateCreated)}</Td>
                                            <Td>{flight.dateUpdated.substring(0, 2) === "00" ? 'No Updates' : IsoConverter.toFullString(flight.dateUpdated)}</Td>
                                            <Td>
                                            <Link to={`/flights/edit/${flight.id}`}>
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
                                        Edit
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

export default ViewFlights