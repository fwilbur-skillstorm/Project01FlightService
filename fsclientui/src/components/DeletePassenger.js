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

const baseURL = 'https://localhost:7156/api/Passengers'

const DeletePassenger = (props) => {
    const [passengers, setPassengers] = React.useState(null)

    React.useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                setPassengers(response.data)
            }).catch((e) => {
                setPassengers(null)
            })
    }, [])

    if (!passengers) return (
        navigation()
    )

    return (
        <>
            {navigation()}
            <div>
                <Box borderWidth='2px' borderRadius='xl' overflow='hidden' p={4}>
                    <TableContainer>
                        <Table variant='striped' colorScheme='blue'>
                            <TableCaption>
                                Passenger entries can be edited by clicking the "Delete" button next to one of the entries.
                            </TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>
                                        ID
                                    </Th>
                                    <Th>
                                        First Name
                                    </Th>
                                    <Th>
                                        Last Name
                                    </Th>
                                    <Th>
                                        Email
                                    </Th>
                                    <Th>
                                        Date of Birth
                                    </Th>
                                    <Th>
                                        Age
                                    </Th>
                                    <Th>
                                        Career
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
                                {passengers.map((person) => (
                                    <React.Fragment key={person.id}>
                                        <Tr>
                                            <Td>{person.id}</Td>
                                            <Td>{person.firstName}</Td>
                                            <Td>{person.lastName}</Td>
                                            <Td>
                                                <a href={`mailto:${person.email}?subject=Concerning Your Account&body=Thanks for flying with Not Actually Deathtraps`}>
                                                    {person.email}
                                                </a>
                                            </Td>
                                            <Td>{IsoConverter.toDateOnly(person.dob)}</Td>
                                            <Td>{person.age}</Td>
                                            <Td>{person.job == null ? '(not provided)' : person.job}</Td>
                                            <Td>{IsoConverter.toDateOnly(person.dateCreated)}</Td>
                                            <Td>{person.dateUpdated.substring(0, 2) === "00" ? 'No Updates' : IsoConverter.toFullString(person.dateUpdated)}</Td>
                                            <Td>
                                                <Link to='/'>
                                                    <Button colorScheme='red' variant='solid'>
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
                                        ID
                                    </Th>
                                    <Th>
                                        First Name
                                    </Th>
                                    <Th>
                                        Last Name
                                    </Th>
                                    <Th>
                                        Email
                                    </Th>
                                    <Th>
                                        Date of Birth
                                    </Th>
                                    <Th>
                                        Career
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
            option1Url='/passengers/view'
            option2Url='/passengers/create'
            option3Url='/passengers/delete'
            option4Url='/passengers'
            option1Text='View and Edit Passengers'
            option2Text='Create a Passenger'
            option3Text='Delete a Passenger'
            option4Text='How to Use'
        />
    )
}

export default DeletePassenger