import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { PrivateRoute } from '../_components'
import { AuthContainer } from '../components/auth/auth-container'
import BooksPage from '../pages/BooksPage'
import BlogApp from '../pages/BlogPage/'
import NavBar from '../components/main-navbar/main-navbar'
import SapperPage from '../pages/SapperPage/sapper-page'
import { MENU_ITEMS } from '../constants'
import NotFoundPage from '../pages/NotFound/not-found-page'

import './app.css'

const App = () => {
    return (
        <div className="app">
            <Router>
                <NavBar menuItems={MENU_ITEMS} />
                <AuthContainer />
                <Switch>
                    <PrivateRoute exact path="/" component={BooksPage} />
                    <PrivateRoute path="/blog" component={BlogApp} />

                    <Route exact path="/sapper-page" component={SapperPage} />
                    <Route path="*" component={NotFoundPage} />
                </Switch>
            </Router>
        </div>
    )
}

function mapStateToProps(state) {
    const { user, loggedIn } = state.authentication
    const { alert } = state
    return {
        alert,
        user,
        loggedIn,
    }
}

const connectedApp = connect(mapStateToProps)(App)
export { connectedApp as App }
