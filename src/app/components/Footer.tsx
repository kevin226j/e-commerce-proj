import * as React from 'react'

export const Footer: React.StatelessComponent<{}> = () => {
    return (
        <footer className="section-footer bg-dark white">
            <div className="container">
                <section className="footer-bottom row">
                    <div className="col-sm-6">
                        <p> Made with &lt;3 <br />  by Vosidiy M.</p>
                    </div>
                    <div className="col-sm-6">
                        <p className="text-sm-right">
                            Copyright © 2018 <br />
                        </p>
                    </div>
                </section>
            </div>
        </footer>
    )

}



