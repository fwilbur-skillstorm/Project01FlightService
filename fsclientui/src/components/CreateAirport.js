import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
} from '@chakra-ui/react'
import MainNavBar from "./MainNavBar"

const CreateAirport = (props) => {
    const [airportLocation, setAirportLocation] = useState('')
    const [airportCode, setAirportCode] = useState('')

    const { handleSubmit, register, formState: { errors, isSubmitting }, } = useForm()

    const onSubmit = event => {
        event.preventDefault()
        alert(`Airport Location: ${airportLocation}, Airport Code: ${airportCode}.`)
    }

    return (
        <>
            {navigation()}
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isRequired>
                    <FormLabel htmlFor='airportlocation'>Airport Location</FormLabel>
                    <Input 
                        type='text' 
                        id='airportlocation'
                        onChange={event => setAirportLocation(event.target.value)}
                        {...register('airportlocation', {
                            required: true,
                            minLength: { value: 3, message: 'Minimum length should be 3.'}
                        })}
                    />
                    <FormHelperText>
                        The airport location can and should include country.
                    </FormHelperText>
                </FormControl>
                <FormControl isRequired>
                <FormLabel htmlFor='airportcode'>Airport Code</FormLabel>
                    <Input 
                        type='text' 
                        id='airportcode'
                        onChange={event => setAirportCode(event.target.value)}
                        {...register('airportcode', {
                            required: true,
                            pattern: /a-zA-Z/,
                            minLength: { value: 3, message: 'Minimum length should be 3.'},
                            maxLength: { value: 3, message: 'Maximum length should be 3.'}
                        })}
                    />
                    <FormHelperText>
                        The airport code should be exactly three capital letters.
                    </FormHelperText>
                    <FormErrorMessage>
                        {errors.name && errors.name.message}
                    </FormErrorMessage>
                </FormControl>
                <Button
                    variantColor='teal'
                    variant='outline'
                    type='submit'
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