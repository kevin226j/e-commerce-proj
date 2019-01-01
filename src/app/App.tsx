import * as React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { Home } from './components/Home'

import Navigation from './components/Navigation'


// const Test = () => { return (<h1>TEST!</h1>) }
class Test extends React.Component<{}, any> {
    render() {
        return (

            <section className="section-content padding-y-lg">
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
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Navigation />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/test' component={Test} />
                        <Route render={() => {
                            return (
                            <section className="section-content padding-y-lg">
                                <div className="container">
                                    <p>NOT FOUND!</p>
                                </div>
                            </section>
                            )
                        }} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;