import * as React from 'react'
import { IGridViewOptions, IProductProps } from '../../interfaces'

export const ProductList: React.StatelessComponent<IGridViewOptions<IProductProps>> = (props) => {
    return (
        <React.Fragment>
            <div className="card">
                {props.dataItems.map(buildProductList(props))}
            </div>
        </React.Fragment>
    )
}

const buildProductList = (props: IGridViewOptions<IProductProps>) => (itm: IProductProps, ndx: number) => {
    return (
        <article className="itemlist" key={ndx}>
            <div className="row row-sm">
                <aside className="col-sm-3">
                    <div className="img-wrap"><img src={itm.productImage} className="img-md" /></div>
                </aside>
                <div className="col-sm-6">
                    <div className="text-wrap">
                        <h4 className="title"> {itm.productName} </h4>
                        <p> {itm.productDescription} </p>
                        <p className="rating-wrap my-0 text-muted">
                            <span className="label-rating">132 reviews</span>
                            <span className="label-rating">154 orders </span>
                        </p>
                    </div>
                </div>
                <aside className="col-sm-3">
                    <div className="border-left pl-3">
                        <div className="price-wrap">
                            <span className="h3 price"> ${itm.productPrice} </span><del className="price-old"> {itm.productBeforePrice ? '$' + itm.productBeforePrice : ''}</del>
                        </div>
                        <p className="text-success"> {itm.isFreeShipping ? 'Free shipping' : ''}</p>
                        <p>
                            {props.showAddtoCartButton ? (<button onClick = {onClick(props, itm.id, 'add')} className="btn btn-warning"> Buy now </button>) : ''}
                            <a href={"/products/"+itm.id} className="btn btn-light"> Details  </a> </p>
                    </div>
                </aside>
            </div>
        </article>
    )
}

const onClick = (props: IGridViewOptions<IProductProps>, id: string, action: string) => (e: React.SyntheticEvent<HTMLButtonElement>) => {
    props.onButtonClick(id, action);
};