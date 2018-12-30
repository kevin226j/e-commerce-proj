import * as React from 'react'

interface IProps {
    compiler: string,
    framework: string,
    bundler: string
}

export class Hello extends React.Component<IProps, {}> {
    render() {
        return (
            <React.Fragment>
                <header className="section-header">
                    <nav className="navbar navbar-landing navbar-expand-lg navbar-dark bg-dark">
                        <div className="container">
                            <a className="navbar-brand mr-auto" href="#"> <img className="logo" src="/images/logo-white.png" /> LOGO</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbar1">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <a className="nav-link page-scroll active" href="#intro">Intro</a>
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
                                <img src="/images/items/comp.png" className="img-fluid my-5" width="500" />
                            </div>
                        </div>
                    </div>
                </section>


                <section id="features" className="section-features bg2 padding-y-lg">
                    <div className="container">

                        <header className="section-heading text-center">
                            <h2 className="title-section">How it works </h2>
                            <p className="lead"> Good sub heading this sounded nonsense to Alice </p>
                        </header>

                        <div className="row">
                            <aside className="col-sm-4">
                                <figure className="itembox text-center">
                                    <span className="icon-wrap icon-lg bg-secondary white"><i className="fa fa-envelope-open"></i></span>
                                    <figcaption className="text-wrap">
                                        <h4 className="title">Sync across all devices</h4>
                                        <p>This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red Queen. To her surprise.</p>
                                    </figcaption>
                                </figure>
                            </aside>
                            <aside className="col-sm-4">
                                <figure className="itembox text-center">
                                    <span className="icon-wrap icon-lg bg-secondary  white"><i className="fa fa-heart"></i></span>
                                    <figcaption className="text-wrap">
                                        <h4 className="title">Easy to Customize</h4>
                                        <p>This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red Queen. To her surprise. </p>
                                    </figcaption>
                                </figure>
                            </aside>
                            <aside className="col-sm-4">
                                <figure className="itembox text-center">
                                    <span className="icon-wrap icon-lg bg-secondary  white"><i className="fa fa-users"></i>	</span>
                                    <figcaption className="text-wrap">
                                        <h4 className="title">Unique Interface Design</h4>
                                        <p>This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red Queen. To her surprise. </p>
                                    </figcaption>
                                </figure>
                            </aside>
                        </div>

                        <p className="text-center">
                            <br />
                            <a href="#" className="btn btn-warning">Some action button</a>
                        </p>

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