import * as React from 'react'
import { Footer } from '../components/shared/Footer'

export const Layout: React.StatelessComponent<{ size: string }> = (props) => {
    let _size: string = null;

    switch (props.size) {
        case 'small':
            _size = 'section-content padding-y-sm'
            break;
        case 'large':
            _size = 'section-content padding-y-lg'
    }

    return (
        <React.Fragment>
            <section className="section-content padding-y-lg">
                <section className={_size}>
                    <div className="container">

                        {props.children}

                    </div>
                </section>
            </section>

            <Footer />
            
        </React.Fragment>
    )
}