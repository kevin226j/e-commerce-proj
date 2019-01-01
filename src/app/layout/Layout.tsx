import * as React from 'react'
import Navigation from '../components/Navigation'

export const Layout : React.StatelessComponent<{}> = (props) => {
    return (
        <React.Fragment>
            <Navigation/>
            {props.children}
        </React.Fragment>
    )
}