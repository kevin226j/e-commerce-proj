import * as React from 'react'
import { Layout } from '../../layout/Layout'

import {ProductList} from '../../components/products/ProductList'
var data = require('../../products.json');

export class Products extends React.Component<{}, any> {
    render() {
        return (
            <Layout size={'large'}>
                <ProductList
                    dataItems = {data}
                    showAddtoCartButton = {true}
                />
            </Layout >
        );
    }
}