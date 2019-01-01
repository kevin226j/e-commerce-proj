import * as React from 'react'

export class Error404 extends React.Component<{}, any> {
    render() {
        return (
            <React.Fragment>
                <section className="section-content padding-y-lg">
                    <div className="container">
                        <p>NOT FOUND!</p>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

