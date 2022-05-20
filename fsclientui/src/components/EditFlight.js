import { useForm } from 'react-hook-form'
import React from 'react'
import axios from 'axios'
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
} from '@chakra-ui/react'
import DatePicker from 'react-datepicker'
import Select from 'react-select'
import MainNavBar from './MainNavBar'
import { useParams } from 'react-router-dom'
import './Datepicker.css'
import 'react-datepicker/dist/react-datepicker.css'

const baseURL = 'https://localhost:7156/api'


const EditFlight = (props) => {
    const params = useParams()
    const [flight, setFlight] = React.useState(null)
    const [airports, setAirports] = React.useState(null)
    const [origin, setOrigin] = React.useState({ value: 1 })
    const [destination, setDestination] = React.useState({ value: 1 })
    const [departure, setDeparture] = React.useState(new Date())
    const [arrival, setArrival] = React.useState(new Date())
    const [capacity, setCapacity] = React.useState()
    const { handleSubmit, formState: { errors, isSubmitting }, } = useForm()

    React.useEffect(() => {
        getDemAirports()
        getInitialFlight()
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

    const initialFlightId = params.flightId
    const getInitialFlight = () => {
        axios.get(baseURL + '/Flights/' + initialFlightId)
        .then((response) => {
            console.log(response.data)
            setFlight(response.data)
            setOrigin(flight.origin)
            setDestination(flight.destination)
            setDeparture(flight.departure)
            setArrival(flight.arrival)
            setCapacity(flight.capacity)
        }).catch((e) => {
            setFlight(null)
            console.log('Could not set flight: ' + e.toString())
        })
    }

    const handleOriginChange = (data) => {
        airports.forEach(airport => {
            if (data.id === airport.id) {
                setOrigin(data)
            }
        })
    }

    const handleDestinationChange = (data) => {
        airports.forEach(airport => {
            if (data.id === airport.id) {
                setDestination(data)
            }
        })
    }

    const onSubmit = data => {
        const theflight = {
            origin: origin,
            departure: departure,
            destination: destination,
            arrival: arrival,
            capacity: capacity
        }
        console.log(Object.entries(theflight))
        axios.post(baseURL + '/Flights', theflight, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                console.log(response.status)
                console.log(response.data)
            })
            .then((response) => {
                getDemAirports()
            })
            .catch((e) => {
                console.log('Could not edit flight: ' + e.toString())
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

            <Box borderWidth='2px' borderRadius='xl' overflow='hidden' p={4} m='auto' mt='10' maxWidth={500}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl isRequired>
                        <FormLabel htmlFor='origin'>Airport Location</FormLabel>
                        <Select
                            defaultValue={flight}
                            options={airports}
                            name='origin'
                            value={origin}
                            label={origin.label}
                            onChange={handleOriginChange}
                        />
                        <FormHelperText>
                            The airport location can and should include country.
                        </FormHelperText>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor='departure'>Departure Time</FormLabel>
                        <DatePicker className='border' showTimeSelect timeIntervals={5} selected={departure} onChange={date => setDeparture(date)} />
                        <span>Chosen time: {departure.toLocaleTimeString()}</span>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor='destination'>Destination</FormLabel>
                        <Select
                            defaultValue={flight}
                            options={airports}
                            name='destination'
                            value={destination}
                            label={destination.label}
                            onChange={handleDestinationChange}
                        />
                        <FormHelperText>
                            The airport code should be exactly three capital letters.
                        </FormHelperText>
                        <FormErrorMessage>
                            {errors.name && errors.name.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl isRequired>
                        <Input name='capacity' value={capacity} onChange={e => setCapacity(e.target.value)}>
                        </Input>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor='arrival'>Arrival Time</FormLabel>
                        <DatePicker className='border' showTimeSelect timeIntervals={5} selected={arrival} onChange={date => setArrival(date)} />
                        <span>Chosen time: {arrival.toLocaleTimeString()}</span>
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

export default EditFlight