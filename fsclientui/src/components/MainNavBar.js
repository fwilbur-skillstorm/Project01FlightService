import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react'

const MainNavBar = () => {
    return (
        <Breadcrumb separator='|'>
            <BreadcrumbItem>
                <BreadcrumbLink href='#'>
                    Home
                </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='#'>
                    Flights
                </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='#'>
                    Airlines
                </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='#'>
                    Passengers
                </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='#'>
                    Itineraries
                </BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}

export default MainNavBar