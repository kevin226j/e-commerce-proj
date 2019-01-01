import * as React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import App from './App';
import { Home } from './components/Home'

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={App} />
                <Route path="/home" component={Home} />


            </Router>
        )
    }

}

export default AppRouter