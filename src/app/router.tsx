import * as React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import Navigation from './components/Navigation'

import { Home } from './components/Home'
import { Login } from './components/Login'
import { Register } from './components/Register'
import {Products} from './components/products/Products'
import {ProductDetail} from './components/products/ProductDetail'
import {Cart} from './components/Cart'
import {Checkout} from './components/Checkout'

import {Error404} from './views/error404'

const AppRouter: React.StatelessComponent<{}> = () => {
    return (
        <React.Fragment>
            {/* Navigation Bar Component */}
            <Navigation />

            {/* Routing */}
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/products' component={Products} />
                <Route path='/products/:id' component={ProductDetail} />
                <Route exact path='/cart' component={Cart} />
                <Route exact path='/checkout' component={Checkout} />
                <Route component={Error404} />
            </Switch>
        </React.Fragment>
    )
}

export default AppRouter