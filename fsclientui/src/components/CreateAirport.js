import { useForm } from 'react-hook-form'
import {
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import MainNavBar from "./MainNavBar"


const CreateAirport = (props) => {
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm()

    const onSubmit = data => {
        console.log(data.toString())
        navigate('/airports/view')
    }

    return (
        <>
            {navigation()}
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
                            minLength: { value: 3, message: 'Minimum length should be 3.'}
                        }
                        )}
                    />
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