import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react'
import { Link } from "react-router-dom";

const MainNavBar = (props) => {
    return (
        <Breadcrumb separator='|'>
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to='/'>
                    {props.homeText}
                </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to={props.option1Url}>
                    {props.option1Text}
                </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to={props.option2Url}>
                    {props.option2Text}
                </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to={props.option3Url}>
                    {props.option3Text}
                </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to={props.option4Url}>
                    {props.option4Text}
                </BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}

export default MainNavBar