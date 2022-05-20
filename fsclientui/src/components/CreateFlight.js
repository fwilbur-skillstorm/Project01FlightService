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
    Select
} from '@chakra-ui/react'
import DatePicker from 'react-datepicker'
import { useNavigate } from 'react-router-dom'
import MainNavBar from './MainNavBar'
import './Datepicker.css'
import 'react-datepicker/dist/react-datepicker.css'

const baseURL = 'https://localhost:7156/api/Locations'


const CreateFlight = (props) => {
    const navigate = useNavigate()
    const [airports, setAirports] = React.useState(null)
    const [departure, setDeparture] = React.useState(new Date())
    const [arrival, setArrival] = React.useState(new Date())
    const { handleSubmit, formState: { errors, isSubmitting }, } = useForm()

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

    const onSubmit = data => {
        console.log(data.toString())
//        navigate('/flights/view')
    }

    if (!airports) return (
        navigation()
    )
    
    return (
        <>
        {navigation()}
        <Box borderWidth='2px' borderRadius='xl' overflow='hidden' p={4}>    
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isRequired>
                    <FormLabel htmlFor='origin'>Airport Location</FormLabel>
                    <Select>
                        {airports.map((airport) => (
                            <React.Fragment key={airport.id}>
                                <option value={airport.id}>{airport.airportCode} — {airport.airportName}</option>
                            </React.Fragment>
                        ))}
                    </Select>
                    <FormHelperText>
                        The airport location can and should include country.
                    </FormHelperText>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel htmlFor='departure'>Departure Time</FormLabel>
                    <DatePicker className='border' showTimeSelect timeIntervals={5} selected={departure} onChange={date => setDeparture(date)} />
                </FormControl>
                <FormControl isRequired>
                <FormLabel htmlFor='destination'>Destination</FormLabel>
                    <Select 
                        type='select'
                        search='true'
                    >
                        {airports.map((airport) => (
                            <React.Fragment key={airport.id}>
                                <option value={airport.id}>{airport.airportCode} — {airport.airportName}</option>
                            </React.Fragment>
                        ))}
                    </Select>
                    <FormHelperText>
                        The airport code should be exactly three capital letters.
                    </FormHelperText>
                    
                    <FormErrorMessage>
                        {errors.name && errors.name.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl isrequired>
                    <FormLabel htmlFor='arrival'>Arrival Time</FormLabel>
                    <DatePicker className='border' showTimeSelect timeIntervals={5} selected={arrival} onChange={date => setArrival(date)} />
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

export default CreateFlight