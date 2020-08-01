import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { history } from '../_helpers'
import { PrivateRoute } from '../_components'
import {AuthContainer} from '../components/auth/auth-container'
import BooksPage from '../pages/BooksPage'
import NavBar from '../components/main-navbar/main-navbar'
import SapperPage from '../pages/SapperPage/sapper-page'
import { MENU_ITEMS } from '../constants'

import './app.css'

class App extends React.Component {
   

    render() {
        return (
            <div className="app">
                <Router history={history}>
                    <NavBar menuItems={MENU_ITEMS} />
                    <AuthContainer />
                    <Switch>
                        <PrivateRoute exact path="/" component={BooksPage} />
                        
                        <Route
                            exact
                            path="/sapper-page"
                            component={SapperPage}
                        />
                        
                    </Switch>
                </Router>
            </div>
        )
    }
}

function mapStateToProps(state) {

    const { user, loggedIn } = state.authentication
    const { alert } = state
    return {
        alert,
        user,
        loggedIn
    }
}

const connectedApp = connect(mapStateToProps)(App)
export { connectedApp as App }
