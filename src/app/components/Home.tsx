import * as React from 'react'
import { Layout } from '../layout/Layout'

export class Home extends React.Component<{}, any> {
    render() {
        return (
            <React.Fragment>
                <section id="intro" className="section-intro bg-secondary pt-5">
                    <div className="container">
                        <div className="row d-flex" style={{ minHeight: '600px;' }}>
                            <div className="col-sm-6 d-flex align-items-center">
                                <header className="intro-wrap text-white">
                                    <h2 className="display-3"> Amazing place for  hero title </h2>
                                    <p className="lead">Bootstrap ecommerce is more then template - also framework. <br /> It is modern and fully customizable websites, WebApp and Mobile template for Your Project</p>
                                    <a href="#" className="btn btn-warning">Download</a>
                                    <a href="#" className="btn btn-light">Learn more</a>
                                </header>
                            </div>
                            <div className="col-sm-6 text-right">
                                <img src={require("../../assets/images/items/comp.png")} className="img-fluid my-5" width="500" />
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="section-footer bg-dark white">
                    <div className="container">
                        <section className="footer-bottom row">
                            <div className="col-sm-6">
                                <p> Made with &lt;3 <br />  by Vosidiy M.</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="text-sm-right">
                                    Copyright © 2018 <br />
                                    <a href="http://bootstrap-ecommerce.com">Bootstrap-ecommerce UI kit</a>
                                </p>
                            </div>
                        </section>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}