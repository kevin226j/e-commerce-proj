import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import AppRouter from './router'

class App extends React.Component {
    render() {
        return (
            <Router>
                <AppRouter />
            </Router>
        );
    }
}

export default App;