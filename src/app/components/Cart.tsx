import * as React from 'react'

export class Cart extends React.Component {
    render() {
        return (
            <section className="section-content padding-y-lg">
                <section className="section-content padding-y-sm">
                    <div className="container">
                        <div className="card">
                            <table className="table table-hover shopping-cart-wrap">
                                <thead className="text-muted">
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col" style={{ width: "120" }}>Quantity</th>
                                        <th scope="col" style={{ width: "120" }}>Price</th>
                                        <th scope="col" style={{ width: "200" }} className="text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <figure className="media">
                                                <div className="img-wrap"><img src={require("../../assets/images/items/1.jpg")} className="img-thumbnail img-sm" /></div>
                                                <figcaption className="media-body">
                                                    <h6 className="title text-truncate">Product name goes here </h6>
                                                    <dl className="dlist-inline small">
                                                        <dt>Size: </dt>
                                                        <dd>XXL</dd>
                                                    </dl>
                                                    <dl className="dlist-inline small">
                                                        <dt>Color: </dt>
                                                        <dd>Orange color</dd>
                                                    </dl>
                                                </figcaption>
                                            </figure>
                                        </td>
                                        <td>
                                            <select className="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                        </td>
                                        <td>
                                            <div className="price-wrap">
                                                <var className="price">USD 145</var>
                                                <small className="text-muted">(USD5 each)</small>
                                            </div>
                                        </td>
                                        <td className="text-right">
                                            <a title="" href="" className="btn btn-outline-success" data-toggle="tooltip" data-original-title="Save to Wishlist"> <i className="fa fa-heart"></i></a>
                                            <a href="" className="btn btn-outline-danger"> × Remove</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <figure className="media">
                                                <div className="img-wrap"><img src={require("../../assets/images/items/2.jpg")} className="img-thumbnail img-sm" /></div>
                                                <figcaption className="media-body">
                                                    <h6 className="title text-truncate">Product name goes here </h6>
                                                    <dl className="dlist-inline small">
                                                        <dt>Size: </dt>
                                                        <dd>XXL</dd>
                                                    </dl>
                                                    <dl className="dlist-inline small">
                                                        <dt>Color: </dt>
                                                        <dd>Orange color</dd>
                                                    </dl>
                                                </figcaption>
                                            </figure>
                                        </td>
                                        <td>
                                            <select className="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                        </td>
                                        <td>
                                            <div className="price-wrap">
                                                <var className="price">USD 35</var>
                                                <small className="text-muted">(USD10 each)</small>
                                            </div>
                                        </td>
                                        <td className="text-right">
                                            <a title="" href="" className="btn btn-outline-success" data-toggle="tooltip" data-original-title="Save to Wishlist"> <i className="fa fa-heart"></i></a>
                                            <a href="" className="btn btn-outline-danger btn-round"> × Remove</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <figure className="media">
                                                <div className="img-wrap"><img src={require("../../assets/images/items/3.jpg")} className="img-thumbnail img-sm" /></div>
                                                <figcaption className="media-body">
                                                    <h6 className="title text-truncate">Product name goes here </h6>
                                                    <dl className="dlist-inline small">
                                                        <dt>Size: </dt>
                                                        <dd>XXL</dd>
                                                    </dl>
                                                    <dl className="dlist-inline small">
                                                        <dt>Color: </dt>
                                                        <dd>Orange color</dd>
                                                    </dl>
                                                </figcaption>
                                            </figure>
                                        </td>
                                        <td>
                                            <select className="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                        </td>
                                        <td>
                                            <div className="price-wrap">
                                                <var className="price">USD 45</var>
                                                <small className="text-muted">(USD15 each)</small>
                                            </div>
                                        </td>
                                        <td className="text-right">
                                            <a title="" href="" className="btn btn-outline-success" data-toggle="tooltip" data-original-title="Save to Wishlist"> <i className="fa fa-heart"></i></a>
                                            <a href="" className="btn btn-outline-danger btn-round"> × Remove</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="row">
                            <div className="col-md-4 offset-md-8">
                                <div className="box">
                                    <dl className="dlist-align">
                                        <dt>Parameter: </dt>
                                        <dd className="text-right">Value name</dd>
                                    </dl>
                                    <dl className="dlist-align">
                                        <dt>Color:</dt>
                                        <dd className="text-right">Orange and Black</dd>
                                    </dl>
                                    <dl className="dlist-align">
                                        <dt>Material:</dt>
                                        <dd className="text-right">Leather</dd>
                                    </dl>
                                    <dl className="dlist-align">
                                        <dt>Total cost: </dt>
                                        <dd className="text-right h5 b"> USD195 </dd>
                                    </dl>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
            </section>
        )
    }
}