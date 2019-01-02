import * as React from 'react'
import { Layout } from '../../layout/Layout';

export class Error404 extends React.Component<{}, any> {
    render() {
        return (
            <Layout size={'small'}>
                <div id="main">
                    <div className="fof">
                        <h1> Oops! page cannot be found</h1>
                    </div>
                </div>
            </Layout>
        );
    }
}

