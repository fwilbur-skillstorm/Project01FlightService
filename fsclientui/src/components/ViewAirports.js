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
import MainNavBar from './MainNavBar'

const baseURL = 'https://localhost:7156/api/Locations'

const ViewAirports = (props) => {
    const [airports, setAirports] = React.useState(null)

    React.useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                setAirports(response.data)
            }).catch((e) => {
                let x = {}
                x.blah = 'hello'
                x.bleh = 'world'
                setAirports(x)
            })
    }, [])

    if (!airports) return (
        navigation()
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
                                Airports can be edited by clicking the "Edit" button next to one of the entries.
                            </TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>
                                        Airport Name
                                    </Th>
                                    <Th>
                                        Airport Code
                                    </Th>
                                    <Th>
                                        Edit
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {airports.map((airport) => (
                                    <React.Fragment key={airport.id}>
                                        <Tr>
                                            <Td>{airport.airportName}</Td>
                                            <Td>{airport.airportCode}</Td>
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
                                        Airport Name
                                    </Th>
                                    <Th>
                                        Airport Code
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
            option1Url='/airports/view'
            option2Url='/airports/create'
            option3Url='/airports/delete'
            option4Url='/airports'
            option1Text='View and Edit Airports'
            option2Text='Create an Airport'
            option3Text='Delete an Airport'
            option4Text='How to Use'
        />
    )
}

export default ViewAirports