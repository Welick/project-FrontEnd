import React from 'react'
import './App.css'
import Navigation from './components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import Login from './components/Login'
import Register from './components/Register'
import About from './components/About'
import PageNotFound from './components/PageNotFound'
import Shop from './components/Shop'
import CreateAccount from './components/Create-Account'
import ContextWrapper from './components/Context-Wrapper'
import { UserContext } from './components/Context-Wrapper'
import AccountsPage from './components/Accounts-Page'
import Details from './components/Details'
import { toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';

toast.configure()

function App() {
  return (
    <div>
      <BrowserRouter>
        <ContextWrapper>
          <Navigation />
          <UserContext.Consumer>
            {({ isLogged, isAdmin }) => (
              <Switch>
                <Route path='/' exact component={Homepage} />
                {/* <Route path='/login' component={Login} /> */}
                {/* <Route path='/register' component={Register} /> */}
                <Route path='/about' component={About} />
                <Route path='/shop' component={Shop} />

                <Route exact path='/accounts/:accountType' component={AccountsPage} />
                <Route path='/accounts/:accountType/:id' component={Details} />

                {!isLogged && !isAdmin ? (<Route path='/login' component={Login} />) : null}
                {!isLogged && !isAdmin ? (<Route path='/register' component={Register} />) : null}

                {isLogged && isAdmin ? (<Route path='/create' component={CreateAccount} />) : null}
                {/* <Route path='/create' component={CreateAccount} /> */}
                <Route component={PageNotFound} />
              </Switch>
            )}
          </UserContext.Consumer>
          <Footer />
        </ContextWrapper>
      </BrowserRouter>
    </div>
  )
}

export default App