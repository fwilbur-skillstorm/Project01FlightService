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
import MainNavBar from "./MainNavBar"

const baseURL = 'https://localhost:7156/api'


const CreateAirport = (props) => {

    const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm()

    const onSubmit = data => {
        console.log(data.airportlocation)
        console.log(data.airportcode)
        axios.post(baseURL + '/Locations', {
            airportName: data.airportlocation, 
            airportCode: data.airportcode 
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
                        <Input
                            // type='text' 
                            // id='airportlocation'
                            // name='airportlocation'
                            // value={apLocation}
                            // onChange={event => setApLocation(event.target.value)}
                            {...register('airportlocation',
                                {
                                    required: true,
                                    minLength: { value: 3, message: 'Minimum length should be 3.' }
                                }
                            )}
                        />
                        <FormErrorMessage>
                            {errors.airportlocation}
                        </FormErrorMessage>
                        <FormHelperText>
                            The airport location can and should include country.
                        </FormHelperText>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor='airportcode'>Airport Code</FormLabel>
                        <Input
                            // type='text' 
                            // id='airportcode'
                            // name='airportcode'
                            // value={apCode}
                            // onChange={event => setApCode(event.target.value)}
                            {...register('airportcode',
                                {
                                    required: true,
                                //     pattern: /a-zA-Z/,
                                //     minLength: { value: 3, message: 'Minimum length should be 3.'},
                                //     maxLength: { value: 3, message: 'Maximum length should be 3.'}
                                }
                            )}
                        />
                        <FormHelperText>
                            The airport code should be exactly three capital letters.
                        </FormHelperText>
                        <FormErrorMessage>
                            {errors.airportcode}
                        </FormErrorMessage>
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

export default CreateAirport