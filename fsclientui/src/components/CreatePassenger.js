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
import { useNavigate } from 'react-router-dom'
import MainNavBar from "./MainNavBar"
import './Datepicker.css'
import 'react-datepicker/dist/react-datepicker.css'

const baseURL = 'https://localhost:7156/api'


const CreatePassenger = (props) => {
    const navigate = useNavigate()
    const [dobVal, setDobVal] = React.useState('')

    const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm()

    const onSubmit = data => {
        console.log(data.toString())
        console.log(dobVal.toString())
        axios.post(baseURL + '/Passengers', {
            firstName: data.firstname,
            lastName: data.lastname,
            email: data.email,
            job: data.career,
            dob: dobVal
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
                console.log('Could not POST new itinerary: ' + e.toString())
                if(e.response) {
                    console.log(e.response)
                } else {
                    console.log(e)
                }
            })
        //        navigate('/passengers/view')
    }

    return (
        <>
            {navigation()}

            <hr />

            <Box borderWidth='2px' borderRadius='xl' overflow='hidden' p={4}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl isRequired>
                        <FormLabel htmlFor='firstname'>First Name</FormLabel>
                        <Input
                            {...register('firstname',
                                {
                                    required: true,
                                    minLength: { value: 2, message: 'Minimum length should be 2.' }
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
                                    minLength: { value: 1, message: 'Minimum length should be 1.' }
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
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid email address!'
                                    }
                                }
                            )}
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor='dob'>Date of Birth</FormLabel>
                        <DatePicker className='border' selected={dobVal} onChange={date => setDobVal(date)} />
                        <FormHelperText>
                            Use the text box to quickly adjust the year.
                        </FormHelperText>
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor='career'>Career</FormLabel>
                        <Input
                            {...register('career',
                                {
                                    required: true,
                                    minLength: { value: 3, message: 'Minimum length should be 3.' }
                                }
                            )}
                        />
                        <FormHelperText>
                            You can leave this blank if you are not working.
                        </FormHelperText>
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
            </Box>
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