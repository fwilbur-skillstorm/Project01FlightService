import { useForm } from 'react-hook-form'
import React from 'react'
import axios from 'axios'
import {
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
} from '@chakra-ui/react'
import { AdapterDateFns, DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import MainNavBar from "./MainNavBar"

const baseURL = 'https://localhost:7156/api/Flights'


const CreateFlight = (props) => {
    const navigate = useNavigate()
    const [airports, setAirports] = React.useState(null)
    const [departure, setDeparture] = React.useState('')
    const [arrival, setArrival] = React.useState('')
    const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm()

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
        navigate('/flights/view')
    }

    if (!airports) return (
        navigation()
    )
    
    return (
        <>
            {navigation()}
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isRequired>
                    <FormLabel htmlFor='origin'>Airport Location</FormLabel>
                    <Input 
                        // type='text' 
                        // id='airportlocation'
                        // name='airportlocation'
                        // value={apLocation}
                        // onChange={event => setApLocation(event.target.value)}
                        {...register('airportlocation', 
                        {
                            required: true,
                            minLength: { value: 3, message: 'Minimum length should be 3.'}
                        }
                        )}
                    />
                    <FormHelperText>
                        The airport location can and should include country.
                    </FormHelperText>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel htmlFor='departure'>Departure Time</FormLabel>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="departure"
                            value={departure}
                            onChange={(newValue) => { setDeparture(newValue) }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </FormControl>
                <FormControl isRequired>
                <FormLabel htmlFor='destination'>Destination</FormLabel>
                    <Input 
                        // type='text' 
                        // id='airportcode'
                        // name='airportcode'
                        // value={apCode}
                        // onChange={event => setApCode(event.target.value)}
                        {...register('airportcode', 
                        // {
                        //     required: true,
                        //     pattern: /a-zA-Z/,
                        //     minLength: { value: 3, message: 'Minimum length should be 3.'},
                        //     maxLength: { value: 3, message: 'Maximum length should be 3.'}
                        // }
                        )}
                    />
                    <FormHelperText>
                        The airport code should be exactly three capital letters.
                    </FormHelperText>
                    
                    <FormErrorMessage>
                        {errors.name && errors.name.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel htmlFor='arrival'>Arrival Time</FormLabel>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="arrival"
                            value={arrival}
                            onChange={(newValue) => { setArrival(newValue) }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
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