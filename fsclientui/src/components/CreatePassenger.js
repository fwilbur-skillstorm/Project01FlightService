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


const CreatePassenger = (props) => {
    const navigate = useNavigate()
    const [dobVal, setDobVal] = React.useState('')

    const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm()

    React.useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                // setAirports(response.data)
            }).catch((e) => {
                let x = {}
                x.blah = 'hello'
                x.bleh = 'world'
                // setAirports(x)
            })
    }, [])

    const onSubmit = data => {
        console.log(data.toString())
        console.log(dobVal.toString())
        navigate('/passengers/view')
    }

    return (
        <>
        {navigation()}
        <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isRequired>
                    <FormLabel htmlFor='firstname'>First Name</FormLabel>
                    <Input 
                        {...register('firstname', 
                        {
                            required: true,
                            minLength: { value: 2, message: 'Minimum length should be 2.'}
                        }
                        )}
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel htmlFor='lastname'>Last Name</FormLabel>
                    <Input 
                        {...register('lastname', 
                        {
                            required: true,
                            minLength: { value: 1, message: 'Minimum length should be 1.'}
                        }
                        )}
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input 
                        {...register('email', 
                        {
                            required: true,
                            minLength: { value: 3, message: 'Minimum length should be 3.'}
                        }
                        )}
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel htmlFor='dob'>Date of Birth</FormLabel>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="dob"
                            value={dobVal}
                            onChange={(newValue) => { setDobVal(newValue) }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='career'>Career</FormLabel>
                    <Input 
                        {...register('career', 
                        {
                            required: true,
                            minLength: { value: 3, message: 'Minimum length should be 3.'}
                        }
                        )}
                    />
                </FormControl>
                <FormErrorMessage>
                    {errors.name && errors.name.message}
                </FormErrorMessage>
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

export default CreatePassenger