import * as React from 'react'
import { Layout } from '../layout/Layout'

export class Login extends React.Component<{}, any> {
    render() {
        return (
            <Layout>
                <section className="section-content padding-y-lg">
                    <section className="section-content padding-y-lg">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 offset-md-4">
                                    <div className="card">
                                        <article className="card-body">
                                            <a href="/register" className="float-right btn btn-outline-primary">Sign up</a>
                                            <h4 className="card-title mb-4 mt-1">Sign in</h4>
                                            <form>
                                                <div className="form-group">
                                                    <label>Your email</label>
                                                    <input name="" className="form-control" placeholder="Email" type="email" />
                                                </div>
                                                <div className="form-group">
                                                    <a className="float-right" href="#">Forgot?</a>
                                                    <label>Your password</label>
                                                    <input className="form-control" placeholder="******" type="password" />
                                                </div>
                                                <div className="form-group">
                                                    <div className="checkbox">
                                                        <label> <input type="checkbox" /> Save password </label>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <button type="submit" className="btn btn-primary btn-block"> Login  </button>
                                                </div>
                                            </form>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </section>

            </Layout>
        )
    }
}