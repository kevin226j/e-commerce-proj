import * as React from 'react'
import { Footer } from '../../components/shared/Footer';


export class Home extends React.Component<{}, any> {
    render() {
        return (
            <React.Fragment>
                <section id="intro" className="section-intro bg-secondary pt-5">
                    <div className="container">
                        <div className="row d-flex" style={{ minHeight: '600px' }}>
                            <div className="col-sm-6 d-flex align-items-center">
                                <header className="intro-wrap text-white">
                                    <h2 className="display-3">Welcome E-Commerce Test Project </h2>
                                    <p className="lead">Built with Node and React w/ Typescript <br /> </p>
                                    <a href="/products" className="btn btn-warning">View Products!</a>
                                </header>
                            </div>
                            <div className="col-sm-6 text-right">
                                <img src={require("../../../assets/images/items/comp.png")} className="img-fluid my-5" width="500" />
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </React.Fragment>
        )
    }
}