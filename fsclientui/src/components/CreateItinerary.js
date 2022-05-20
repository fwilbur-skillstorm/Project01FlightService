import { useForm } from 'react-hook-form'
import React from 'react'
import axios from 'axios'
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
} from '@chakra-ui/react'
import Select from 'react-select'
import { useNavigate } from 'react-router-dom'
import MainNavBar from "./MainNavBar"
import './DisabledInput.css'

const baseURL = 'https://localhost:7156/api'


const CreateItinerary = (props) => {
    const navigate = useNavigate()
    const [passengers, setPassengers] = React.useState(null)
    const [flights, setFlights] = React.useState(null)
    const [selectedFlight, setSelectedFlight] = React.useState({ value: 1 })
    const [selectedPassenger, setSelectedPassenger] = React.useState({ value: 1 })
    const [origin, setOrigin] = React.useState('')
    const [destination, setDestination] = React.useState('')
    const [departure, setDeparture] = React.useState('')
    const [arrival, setArrival] = React.useState('')
    const { handleSubmit, formState: { isSubmitting }, } = useForm()

    React.useEffect(() => {
        axios.get(baseURL + '/Passengers')
            .then((response) => {
                setPassengers(response.data)
            }).catch((e) => {
                console.log('Could not set passengers: ' + e.toString())
            })
    }, [])

    React.useEffect(() => {
        axios.get(baseURL + '/Flights')
            .then((response) => {
                setFlights(response.data)
            })
            .catch((e) => {
                let x = {}
                x.blah = 'hello'
                x.bleh = 'world'
                setFlights(x)
                console.log("couldn't get flights: " + e.toString())
            })
    }, [])

    const handleFlightChange = (data) => {
        flights.forEach(flight => {
            if (data.id === flight.id) {
                setSelectedFlight(data)
                setOrigin(data.origin.airportCode ? data.origin.airportCode : '')
                setDestination(data.destination.airportCode ? data.destination.airportCode : '')
                setDeparture(data.departure ? data.departure : '')
                setArrival(data.arrival ? data.arrival : '')
            }
        })
    }

    const handlePassengerChange = (data) => {
        passengers.forEach(passenger => {
            if (data.id === passenger.id) {
                setSelectedPassenger(data)
            }
        })
    }

    const onSubmit = data => {
        console.log(Object.entries(selectedPassenger).toString())
        console.log(Object.entries(selectedFlight).toString())
        //        navigate('/itineraries/view')
    }

    if (!flights || !passengers) {
        return <>{navigation()}</>
    }

    return (
        <>
            {navigation()}
            <Box borderWidth='2px' borderRadius='xl' overflow='hidden' p={4}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl isRequired>
                        <FormLabel htmlFor='passenger'>Passenger</FormLabel>
                        <Select
                            options={passengers}
                            name='passenger'
                            value={selectedPassenger}
                            label={selectedPassenger.label}
                            onChange={handlePassengerChange}
                        />
                        <FormHelperText>
                            You can type in the field to filter the passenger list.
                        </FormHelperText>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor='flight'>Flight</FormLabel>
                        <Select
                            options={flights}
                            name='flight'
                            value={selectedFlight}
                            label={selectedFlight.label}
                            onChange={handleFlightChange}
                        />
                        <FormHelperText>
                            You can type in the field to filter the flight list.
                        </FormHelperText>
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor=''>Origin</FormLabel>
                        <Input className='disabledinput' type='text' value={origin} disabled={true} />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor=''>Departure</FormLabel>
                        <Input className='disabledinput' type='text' value={departure} disabled={true} />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor=''>Destination</FormLabel>
                        <Input className='disabledinput' type='text' value={destination} disabled={true} />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor=''>Arrival</FormLabel>
                        <Input className='disabledinput' type='text' value={arrival} disabled={true} />
                    </FormControl>
                    <Button
                        colorScheme='teal'
                        variant='outline'
                        type='submit'
                        isLoading={isSubmitting}
                        width='full'
                        mt={4}
                    >
                        Create
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

export default CreateItinerary