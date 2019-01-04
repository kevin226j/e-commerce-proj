import * as React from 'react'
import { Layout } from '../../layout/Layout';
import { Input, DropDown, Button } from '../../components/common/form';




export class Checkout extends React.Component {
    render() {
        return (
            <Layout size={'small'}>
                <div className="row">
                    <div className="col-md-4 offset-md-1">
                        <article className="card">
                            <div className="card-body p-5">
                                <h1>Billing</h1>
                                <p> <img src={require("../../../assets/images/icons/pay-visa.png")} />
                                    <img src={require("../../../assets/images/icons/pay-visa-el.png")} />
                                    <img src={require("../../../assets/images/icons/pay-mastercard.png")} />
                                    <img src={require("../../../assets/images/icons/pay-american-ex.png")} /> </p>
                                <form role="form">

                                    <Input
                                        name='username'
                                        label='Full Name (on the card)'
                                        placeholder=''
                                        value=''
                                        type='text'
                                        isIcon={true}
                                        icon='user'
                                        className='form-control'
                                        onChange={() => console.log('hello')}
                                    />
                                    <Input
                                        name='cardNumber'
                                        label='Card Number'
                                        placeholder=''
                                        value=''
                                        type='text'
                                        isIcon={true}
                                        icon='credit-card'
                                        className='form-control'
                                        onChange={() => console.log('hello')}
                                    />

                                    <div className="row">
                                        <div className="col-sm-8">
                                            <div className="form-group">
                                                <label><span className="hidden-xs">Expiration</span> </label>
                                                <div className="form-inline">
                                                    <DropDown
                                                        name='test'
                                                        label='MM'
                                                        selectedValue=''
                                                        width='45%'
                                                        options={[{ key: '1', value: 'Jan' }, { key: '2', value: 'Feb' }, { key: '3', value: 'Mar' }, { key: '4', value: 'Apr' }]}
                                                        placeHolder='MM'
                                                        onChange={() => console.log('hello')}
                                                    />



                                                    <span style={{ width: "10%", textAlign: "center" }}> / </span>
                                                    <DropDown
                                                        name='test'
                                                        label='YY'
                                                        selectedValue=''
                                                        width='45%'
                                                        options={[{ key: '1', value: 'Jan' }, { key: '2', value: 'Feb' }, { key: '3', value: 'Mar' }, { key: '4', value: 'Apr' }]}
                                                        placeHolder='YY'
                                                        onChange={() => console.log('hello')}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <Input
                                                name='ccv'
                                                label='CVV'
                                                placeholder=''
                                                value=''
                                                type='text'
                                                isIcon={false}
                                                className='form-control'
                                                onChange={() => console.log('hello')}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </article>
                    </div>

                    <div className="col-md-6">
                        <article className="card">
                            <div className="card-body p-5">
                                <h1>Shipping information</h1>
                                <form role="form">
                                    <Input
                                        name='fullName'
                                        label='Full Name'
                                        placeholder='Full Name'
                                        value=''
                                        type='text'
                                        isIcon={true}
                                        icon='user'
                                        className='form-control'
                                        onChange={() => console.log('hello')}
                                    />

                                    <Input
                                        name='address'
                                        label='Address'
                                        placeholder='Address'
                                        value=''
                                        type='text'
                                        isIcon={true}
                                        icon='address'
                                        className='form-control'
                                        onChange={() => console.log('hello')}
                                    />


                                    <div className="row">
                                        <div className="col-md-6">
                                            <Input
                                                name='city'
                                                label='City'
                                                placeholder='City'
                                                value=''
                                                type='text'
                                                isIcon={true}
                                                icon='map'
                                                className='form-control'
                                                onChange={() => console.log('hello')}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <Input
                                                name='state'
                                                label='State'
                                                placeholder='State'
                                                value=''
                                                type='text'
                                                isIcon={true}
                                                icon='map'
                                                className='form-control'
                                                onChange={() => console.log('hello')}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <Input
                                                name='zip'
                                                label='Zip'
                                                placeholder='Zip'
                                                value=''
                                                type='text'
                                                isIcon={true}
                                                icon='map'
                                                className='form-control'
                                                onChange={() => console.log('hello')}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <Input
                                                name='country'
                                                label='Country'
                                                placeholder='Country'
                                                value=''
                                                type='text'
                                                isIcon={true}
                                                icon='map'
                                                className='form-control'
                                                onChange={() => console.log('hello')}
                                            />
                                        </div>
                                    </div>
                                    <Input
                                        name='phone'
                                        label='Phone'
                                        placeholder='Phone'
                                        value=''
                                        type='text'
                                        isIcon={true}
                                        icon='phone'
                                        className='form-control'
                                        onChange={() => console.log('hello')}
                                    />

                                    <Button
                                        className='subscribe'
                                        label='Confirm Order'
                                        onClick={() => console.log('clicked!')}
                                    />

                                </form>
                            </div>
                        </article>
                    </div>
                </div>

            </Layout>
        )
    }
}