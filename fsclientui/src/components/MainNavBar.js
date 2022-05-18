import React from 'react'
import { useLocation } from 'react-router-dom'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react'
import { Link } from "react-router-dom";

const MainNavBar = (props) => {
    const location = useLocation()
    const opt1Regex = new RegExp(props.option1Url, 'gi')
    const opt2Regex = new RegExp(props.option2Url, 'gi')
    const opt3Regex = new RegExp(props.option3Url, 'gi')
    const opt4Regex = new RegExp(props.option4Url, 'gi')

    return (
        <Breadcrumb separator='|'>
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to='/'>
                    {props.homeText}
                </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                {bcConditional(location, props.option1Url, opt1Regex, props.option1Text)}
            </BreadcrumbItem>

            <BreadcrumbItem>
                {bcConditional(location, props.option2Url, opt2Regex, props.option2Text)}
            </BreadcrumbItem>

            <BreadcrumbItem>
                {bcConditional(location, props.option3Url, opt3Regex, props.option3Text)}
            </BreadcrumbItem>

            <BreadcrumbItem>
                {bcConditional(location, props.option4Url, opt4Regex, props.option4Text)}
            </BreadcrumbItem>
        </Breadcrumb>
    )
}

function bcConditional(currenturl, targeturl, regex, text) {
    if(currenturl.toString().search(regex) > 0) {
        return <BreadcrumbLink as={Link} to={targeturl} isCurrentPage>{text}</BreadcrumbLink>
    } else {
        return <BreadcrumbLink as={Link} to={targeturl}>{text}</BreadcrumbLink>
    }
}

export default MainNavBar