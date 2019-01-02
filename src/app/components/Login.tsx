import * as React from 'react'
import { Layout } from '../layout/Layout'
import { Input, Button, DropDown } from './common/form';

export class Login extends React.Component<{}, any> {
    render() {
        return (
            <Layout size={'large'}>
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <div className="card">
                            <article className="card-body">
                                <a href="/register" className="float-right btn btn-outline-primary">Sign up</a>
                                <h4 className="card-title mb-4 mt-1">Sign in</h4>
                                <br />
                                <form>
                                    <Input
                                        name='email'
                                        label='Your Email'
                                        placeholder='Email'
                                        value=''
                                        type='email'
                                        isIcon={false}
                                        className='form-control'
                                        onChange={() => console.log('hello')}
                                    />

                                    <Input
                                        name='password'
                                        label='Your Password'
                                        placeholder='******'
                                        value=''
                                        type='password'
                                        isIcon={false}
                                        className='form-control'
                                        onChange={() => console.log('hello')}
                                    />

                                    <div className="form-group">
                                        <div className="checkbox">
                                            <label> <input type="checkbox" /> Save password </label>
                                        </div>
                                    </div>
                                    <DropDown
                                        name='test'
                                        label='Test'
                                        selectedValue=''
                                        width='25%'
                                        options={[{key: '1',value: '1'}, {key: '2',value:'2'}]}
                                        placeHolder='MM'
                                        onChange={()=>console.log('hello')}
                                    />

                                    <Button
                                        label="Login"
                                        onClick={() => console.log('hello')}
                                    />
                                </form>
                                <br />
                            </article>
                        </div>
                    </div>
                </div>

            </Layout>
        )
    }
}