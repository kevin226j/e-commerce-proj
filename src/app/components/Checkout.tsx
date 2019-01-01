import * as React from 'react'

export class Checkout extends React.Component {
    render() {
        return (

            <section className="section-content padding-y-lg">
                <section className="section-content padding-y-lg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 offset-md-1">
                                <article className="card">
                                    <div className="card-body p-5">
                                    <h1>Billing</h1>
                                        <p> <img src={require("../../assets/images/icons/pay-visa.png")} />
                                            <img src={require("../../assets/images/icons/pay-visa-el.png")} />
                                            <img src={require("../../assets/images/icons/pay-mastercard.png")} />
                                            <img src={require("../../assets/images/icons/pay-american-ex.png")} /> </p>
                                        
                                        <form role="form">
                                            <div className="form-group">
                                                <label htmlFor="username">Full name (on the card)</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><i className="fa fa-user"></i></span>
                                                    </div>
                                                    <input type="text" className="form-control" name="username" placeholder="" required />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="cardNumber">Card number</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><i className="fa fa-credit-card"></i></span>
                                                    </div>
                                                    <input type="text" className="form-control" name="cardNumber" placeholder="" />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-sm-8">
                                                    <div className="form-group">
                                                        <label><span className="hidden-xs">Expiration</span> </label>
                                                        <div className="form-inline">
                                                            <select className="form-control" style={{ width: "45%" }}>
                                                                <option>MM</option>
                                                                <option>01 - Janiary</option>
                                                                <option>02 - February</option>
                                                                <option>03 - February</option>
                                                            </select>
                                                            <span style={{ width: "10%", textAlign: "center" }}> / </span>
                                                            <select className="form-control" style={{ width: "45%" }}>
                                                                <option>YY</option>
                                                                <option>2018</option>
                                                                <option>2019</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label data-toggle="tooltip" title="" data-original-title="3 digits code on back side of the card">CVV <i className="fa fa-question-circle"></i></label>
                                                        <input className="form-control" required type="text" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <button className="subscribe btn btn-primary btn-block" type="button"> Confirm  </button> */}
                                        </form>
                                    </div>
                                </article>
                            </div>



                            <div className="col-md-6">


                                <article className="card">
                                    <div className="card-body p-5">
                                        <h1>Shipping information</h1>
                                        <form role="form">
                                            <div className="form-group">
                                                <label htmlFor="username">Full name (on the card)</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><i className="fa fa-user"></i></span>
                                                    </div>
                                                    <input type="text" className="form-control" name="username" placeholder="" required />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="cardNumber">Card number</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><i className="fa fa-credit-card"></i></span>
                                                    </div>
                                                    <input type="text" className="form-control" name="cardNumber" placeholder="" />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-sm-8">
                                                    <div className="form-group">
                                                        <label><span className="hidden-xs">Expiration</span> </label>
                                                        <div className="form-inline">
                                                            <select className="form-control" style={{ width: "45%" }}>
                                                                <option>MM</option>
                                                                <option>01 - Janiary</option>
                                                                <option>02 - February</option>
                                                                <option>03 - February</option>
                                                            </select>
                                                            <span style={{ width: "10%", textAlign: "center" }}> / </span>
                                                            <select className="form-control" style={{ width: "45%" }}>
                                                                <option>YY</option>
                                                                <option>2018</option>
                                                                <option>2019</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label data-toggle="tooltip" title="" data-original-title="3 digits code on back side of the card">CVV <i className="fa fa-question-circle"></i></label>
                                                        <input className="form-control" required type="text" />
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="subscribe btn btn-primary btn-block" type="button"> Confirm  </button>
                                        </form>
                                    </div>
                                </article>
                            </div>
                        </div>

                    </div>
                </section>
            </section>
        )
    }
}