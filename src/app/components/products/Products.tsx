import * as React from 'react'
import { Layout } from '../../layout/Layout'

export class Products extends React.Component<{}, any> {
    render() {
        return (
            <Layout size={'large'}>
                <div className="card">
                    <article className="itemlist">
                        <div className="row row-sm">
                            <aside className="col-sm-3">
                                <div className="img-wrap"><img src={require("../../../assets/images/items/1.jpg")} className="img-md" /></div>
                            </aside>
                            <div className="col-sm-6">
                                <div className="text-wrap">
                                    <h4 className="title"> Ut wisi enim ad minim veniam  </h4>
                                    <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim veniam </p>
                                    <p className="rating-wrap my-0 text-muted">
                                        <span className="label-rating">132 reviews</span>
                                        <span className="label-rating">154 orders </span>
                                    </p>
                                </div>
                            </div>
                            <aside className="col-sm-3">
                                <div className="border-left pl-3">
                                    <div className="price-wrap">
                                        <span className="h3 price"> $56 </span><del className="price-old"> $98</del>
                                    </div>
                                    <p className="text-success">Free shipping</p>
                                    <p>
                                        <a href="#" className="btn btn-warning"> Buy now </a>
                                        <a href="#" className="btn btn-light"> Details  </a> </p>
                                </div>
                            </aside>
                        </div>
                    </article>

                    <article className="itemlist">
                        <div className="row row-sm">
                            <aside className="col-sm-3">
                                <div className="img-wrap"><img src={require("../../../assets/images/items/2.jpg")} className="img-md" /></div>
                            </aside>
                            <div className="col-sm-6">
                                <div className="text-wrap">
                                    <h4 className="title"> Here goes heading of product  </h4>
                                    <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim veniam </p>
                                    <p className="rating-wrap my-0 text-muted">
                                        <span className="label-rating">132 reviews</span>
                                        <span className="label-rating">154 orders </span>
                                    </p>
                                </div>
                            </div>
                            <aside className="col-sm-3">
                                <div className="border-left pl-3">
                                    <div className="price-wrap">
                                        <span className="h3 price"> $56 </span> <del className="price-old"> $98</del>
                                    </div>
                                    <p className="text-success">Free shipping</p>
                                    <p>
                                        <a href="#" className="btn btn-warning"> Buy now </a>
                                        <a href="#" className="btn btn-light"> Details  </a>
                                    </p>
                                </div>
                            </aside>
                        </div>
                    </article>
                </div>

            </Layout >
        );
    }
}