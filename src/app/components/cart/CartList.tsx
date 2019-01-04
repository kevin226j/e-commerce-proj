import * as React from 'react'
import { IGridViewOptions, IProductProps } from '../../interfaces'
import { DropDown, Input } from '../common/form';

export const CartList: React.StatelessComponent<IGridViewOptions<IProductProps>> = (props) => {
    return (
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

                    {props.dataItems.map((buildCartList(props)))}

                </tbody>
            </table>
        </div>
    )
}

const buildCartList = (props: IGridViewOptions<IProductProps>) => (itm: IProductProps, ndx: number) => {
    return (
        <tr key={ndx}>
            <td>
                <figure className="media">
                    <div className="img-wrap"><img src={itm.productImage} className="img-thumbnail img-sm" /></div>
                    <figcaption className="media-body">
                        <h6 className="title text-truncate">{itm.productName} </h6>
                        <dl className="dlist-inline small">
                            <dt>Model: </dt>
                            <dd> {itm.productModel}</dd>
                        </dl>
                        <dl className="dlist-inline small">
                            <dt>Color: </dt>
                            <dd>{itm.productColor}</dd>
                        </dl>
                    </figcaption>
                </figure>
            </td>
            <td>
                <DropDown
                    name='test'
                    label='Test'
                    selectedValue=' '
                    width='100%'
                    options={[{ key: '1', value: '1' }, { key: '2', value: '2' }, { key: '3', value: '3' }, { key: '4', value: '4' }]}
                    placeHolder=''
                    onChange={() => console.log('hello')}
                />
                {/* <div className="col-md-6">
                    <Input
                        type='number'
                        name='quantity'
                        id={ndx.toString()}
                        value={1}
                        className='form-control'
                        onChange={() => console.log('clicked')}
                        isIcon={false}
                    />
                </div> */}
            </td>
            <td>
                <div className="price-wrap">
                    <var className="price">USD {itm.productPrice}</var>
                    <small className="text-muted">(USD each)</small>
                </div>
            </td>
            <td className="text-right">
                <a title="" href="" className="btn btn-outline-success" data-toggle="tooltip" data-original-title="Save to Wishlist"> <i className="fa fa-heart"></i></a>
                {props.showDeleteButton ? <button onClick={onClick(props, itm.id, 'remove')} className="btn btn-outline-danger"> × Remove</button> : ''}
            </td>
        </tr>
    )
}
const onClick = (props: IGridViewOptions<IProductProps>, id: string, action: string) => (e: React.SyntheticEvent<HTMLButtonElement>) => {
    props.onButtonClick(id, action);
};