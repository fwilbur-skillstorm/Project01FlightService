import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import MainNavBar from "./MainNavBar"

const baseURL = 'https://localhost:7156/api'


const EditAirport = (props) => {
    const params = useParams()
    const airportId = params.airportId
    const [ airport, setAirport ] = React.useState()
    const [ airportCode, setAirportCode ] = React.useState()
    const [ airportName, setAirportName ] = React.useState()
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
                setAirportCode(airport.AirportCode)
                setAirportName(airport.AirportName)
            }).catch((e) => {
                let x = {}
                x.blah = 'hello'
                x.bleh = 'world'
                setAirport(x)
            })
    }, [])

    const onSubmit = data => {
        console.log(data.airportlocation)
        console.log(data.airportcode)
        axios.post(baseURL + '/Locations/' + airportId, {
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



    return (
        <>
            {navigation()}

            <hr />

            <Box borderWidth='2px' borderRadius='xl' overflow='hidden' p={4} m='auto' mt='10' maxWidth={600}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl isRequired>
                        <FormLabel htmlFor='airportlocation'>Airport Location</FormLabel>
                        <Input type='text' name='airportName' value={airportName} onChange={e => setAirportName(e.target.value)}/>
                        <FormHelperText>
                            The airport location can and should include country.
                        </FormHelperText>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor='airportcode'>Airport Code</FormLabel>
                        <Input type='text' name='airportCode' value={airportCode} onChange={e => setAirportCode(e.target.value)} />
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