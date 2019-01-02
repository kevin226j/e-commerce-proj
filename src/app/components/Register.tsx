import * as React from 'react'
import { Layout } from '../layout/Layout'
import { Input, Button } from './common/form';

export class Register extends React.Component<{}, any> {
    render() {
        return (
            <Layout size={'small'}>
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <div className="card">
                            <article className="card-body">
                                <h4 className="card-title mt-3 text-center">Create Account</h4>
                                <p className="text-center">Get started with your free account</p>
                                <p>
                                    <a href="" className="btn btn-block btn-twitter"> <i className="fab fa-twitter"></i> &nbsp; Login via Twitter</a>
                                    <a href="" className="btn btn-block btn-facebook"> <i className="fab fa-facebook-f"></i> &nbsp; Login via facebook</a>
                                </p>
                                <p className="divider-text">
                                    <span>OR</span>
                                </p>
                                <form>
                                    <Input
                                        name="fullName"
                                        value=''
                                        type='text'
                                        className='form-control'
                                        placeholder='Full Name'
                                        isIcon={true}
                                        icon='user'
                                        onChange={() => console.log('hello')}
                                    />

                                    <Input
                                        name="email"
                                        value=''
                                        type='email'
                                        className='form-control'
                                        placeholder='Email Address'
                                        isIcon={true}
                                        icon='envelope'
                                        onChange={() => console.log('hello')}
                                    />
                                    <Input
                                        name="phone"
                                        value=''
                                        type='text'
                                        className='form-control'
                                        placeholder='Phone Number'
                                        isIcon={true}
                                        icon='phone'
                                        onChange={() => console.log('hello')}
                                    />
                                    <Input
                                        name="password"
                                        value=''
                                        type='password'
                                        className='form-control'
                                        placeholder='Create Password'
                                        isIcon={true}
                                        icon='lock'
                                        onChange={() => console.log('hello')}
                                    />
                                    <Input
                                        name="confirmPassword"
                                        value=''
                                        type='password'
                                        className='form-control'
                                        placeholder='Confirm Password'
                                        isIcon={true}
                                        icon='lock'
                                        onChange={() => console.log('hello')}
                                    />
                                    <Button
                                        label ="Create Account"
                                        onClick={() => console.log('hello')}
                                    />
                                    <p className="text-center">Have an account? <a href="/login">Log In</a> </p>
                                </form>
                            </article>
                        </div>

                    </div>
                </div>


            </Layout>
        )
    }
}