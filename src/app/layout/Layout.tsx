import * as React from 'react'
import {Footer} from '../components/Footer'

export const Layout: React.StatelessComponent<{}> = (props) => {
    return (
        <React.Fragment>

            {props.children}

            <Footer/>
        </React.Fragment>
    )
}