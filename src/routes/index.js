import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import URL from "constants/navigation"

import HomePage from "pages/HomePage"

const Routes = () => {
  return (
    <Switch>
      {/* home route */}
      <Route path={URL.HOME} component={HomePage} exact />
      {/* This makes sure that every url is redirected to the home page */}
      <Route path="*">
        <Redirect to={URL.HOME} />
      </Route>
    </Switch>
  )
}

export default Routes
