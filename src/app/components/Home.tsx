import * as React from 'react'
import { Layout } from '../layout/Layout'

export class Home extends React.Component<{}, any> {
    render() {
        return (
            <Layout>
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
            </Layout>
        )
    }
}