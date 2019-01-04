import * as React from 'react'
import { Layout } from '../../layout/Layout';
import { DropDown } from '../../components/common/form';

import{CartList} from '../../components/cart/CartList'
var data = require('../../products.json');


export class Cart extends React.Component {
    render() {
        return (
            <Layout size={'large'}>

                <CartList 
                    dataItems = {data}
                    showDeleteButton = {true}
                    onButtonClick={()=> console.log('clicked')}
                />


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


            </Layout>
        )
    }
}