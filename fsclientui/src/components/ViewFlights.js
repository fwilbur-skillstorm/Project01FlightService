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
            <div>
                <TableContainer>
                    <Table variant='striped' colorScheme=''>
                        <TableCaption>
                            Airports can be edited by clicking the "Edit" button next to one of the entries.
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
                                    Current Occupancy
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
                            {flights.map((item) => (
                                <React.Fragment key={item.id}>
                                    <Tr>
                                        <Td>{item.flightNumber}</Td>
                                        <Td>{item.origin}</Td>
                                        <Td>{item.departure}</Td>
                                        <Td>{item.destination}</Td>
                                        <Td>{item.arrival}</Td>
                                        <Td>0</Td>
                                        <Td></Td>
                                        <Td>{IsoConverter.toDateOnly(item.dateCreated)}</Td>
                                        <Td>{item.dateUpdated.substring(0, 2) === "00" ? 'No Updates' : IsoConverter.toFullString(item.dateUpdated)}</Td>
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
                                    Current Occupancy
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