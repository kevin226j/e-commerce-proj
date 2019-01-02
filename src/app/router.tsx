import * as React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import Navigation from './components/shared/Navigation'

import { Home } from './views/home/Home'
import { Login } from './views/login/Login'
import { Register } from './views/register/Register'
import {Products} from './views/products/Products'
import {ProductDetail} from './views/products/ProductDetail'
import {Cart} from './views/cart/Cart'
import {Checkout} from './views/checkout/Checkout'

import {Error404} from './views/error/error404'

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