import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    FormHelperText,
    Input
} from '@chakra-ui/react'
import { useParams, useNavigate } from 'react-router-dom'
import MainNavBar from "./MainNavBar"

const baseURL = 'https://localhost:7156/api'


const EditAirport = (props) => {
    let navigate = useNavigate()
    const params = useParams()
    const airportId = params.airportId
    const [ airport, setAirport ] = React.useState('')
    const [ airportCode, setAirportCode ] = React.useState('')
    const [ airportName, setAirportName ] = React.useState('')
    const { handleSubmit, formState: { isSubmitting }, } = useForm()

    React.useEffect(() => {
        console.log('uri param: ' + airportId)
        axios.get(baseURL + '/Locations/' + airportId, {
            airportId
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                setAirport(response.data)
            }).catch((e) => {
                let x = {}
                x.blah = 'hello'
                x.bleh = 'world'
                setAirport(x)
            })
    }, [airportId])

    const handleNameUpdates = (data) => {
        setAirportName(data)
    }

    const handleCodeUpdates = (data) => {
        setAirportCode(data)
    }

    const onSubmit = () => {
        console.log(airportName)
        console.log(airportCode)
        axios.post(baseURL + '/Locations/' + airportId, {
            id: airportId,
            airportName: airportName,
            airportCode: airportCode
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                console.log(response.status)
                console.log(response.data)
                window.location.href = '/airports/view'
            })
            .catch((e) => {
                console.log('Could not POST new airport: ' + e.toString())
                if(e.response) {
                    console.log(e.response)
                } else {
                    console.log(e)
                }
            })
    }

    if(!airport) {
        <>
            {navigation()}
        </>
    }

    return (
        <>
            {navigation()}

            <hr />

            <Box borderWidth='2px' borderRadius='xl' overflow='hidden' p={4} m='auto' mt='10' maxWidth={600}>
                <p>Original airport data: {airport.airportCode} — {airport.airportName}</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl isRequired>
                        <FormLabel htmlFor='airportName'>Airport Location</FormLabel>
                        <Input value={airportName} onChange={e => handleNameUpdates(e.target.value)}/>
                        <FormHelperText>
                            The airport location can and should include country.
                        </FormHelperText>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor='airportCode'>Airport Code</FormLabel>
                        <Input value={airportCode} onChange={e => handleCodeUpdates(e.target.value)} />
                        <FormHelperText>
                            The airport code should be exactly three capital letters.
                        </FormHelperText>
                    </FormControl>
                    <Button
                        colorScheme='teal'
                        variant='outline'
                        type='submit'
                        isLoading={isSubmitting}
                        width='full'
                        mt={4}
                    >
                        Edit
                    </Button>
                </form>
            </Box>
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

export default EditAirport