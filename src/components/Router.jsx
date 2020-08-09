import React, { useState, useEffect } from "react"
import { HashRouter, Switch, Route } from "react-router-dom"

import Profile from "../pages/Profile"
import Public from "../pages/Public"
import Protected from "../pages/Protected"
import Nav from "./Nav"

const Router = () => {
  const [current, setCurrent] = useState("home")

  useEffect(() => {
    setRoute()
    window.addEventListener("hashchange", setRoute)
    return () => window.removeEventListener("hashchange", setRoute)
  }, [])

  function setRoute() {
    const location = window.location.href.split("/")
    const pathname = location[location.length - 1]
    setCurrent(pathname ? pathname : "home")
  }

  return (
    <div>
      <HashRouter>
        <Nav current={current} />
        <Switch>
          <Route exact path="/" component={Public} />
          <Route exact path="/protected" component={Protected} />
          <Route exact path="/profile" component={Profile} />
          <Route component={Public} />
        </Switch>
      </HashRouter>
    </div>
  )
}

export default Router
