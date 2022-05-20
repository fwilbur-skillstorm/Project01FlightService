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

const baseURL = 'https://localhost:7156/api'

const DeleteAirport = (props) => {
    const [airports, setAirports] = React.useState(null)

    React.useEffect(() => {
        getDemAirports()
    }, [])
    
    const getDemAirports = () => {
        axios.get(baseURL + '/Locations')
            .then((response) => {
                setAirports(response.data)
            }).catch((e) => {
                setAirports(null)
                console.log('Could not set airports: ' + e.toString())
        })
    }

    const beginDeletion = id => {
        console.log('airport id: ' + id)
        axios.delete(baseURL + '/Locations/' + id)
            .then((response) => {
                console.log(response.status)
                console.log(response.data)
                window.location.href = '/airports/view'
            })
            .catch((e) => {
                console.log('Could not DELETE airport: ' + e.toString())
                if(e.response) {
                    console.log(e.response)
                } else {
                    console.log(e)
                }
            })
    }

    if (!airports) return (
        <>
            {navigation()}
        </>
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
                                Airports can be edited by clicking the "Delete" button next to one of the entries.
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
                                        Delete
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
                                                <Link to='/airports/view'>
                                                    <Button id={airport.id} colorScheme='red' variant='solid' onClick={e => beginDeletion(e.target.id)}>
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
                                        Airport Name
                                    </Th>
                                    <Th>
                                        Airport Code
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

export default DeleteAirport