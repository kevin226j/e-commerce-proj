import * as React from 'react'
import {Link, NavLink} from 'react-router-dom'


const Navigation: React.StatelessComponent<{}> = () => {
    return (
        <header className="section-header">
            <nav className="navbar navbar-landing navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand mr-auto" href="/"> <img className="logo" src={require("../../assets/images/logo-white.png")} /> LOGO</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar1">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink activeClassName='active' className="nav-link page-scroll" exact to="/"> Home </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName='active' className="nav-link page-scroll" to="/test"> Test </NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#features">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#content">Content</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#more">More info</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="http://bootstrap-ecommerce.com"> Download </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navigation