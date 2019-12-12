import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DetailsView from './components/detail-view/DetailView'
import TopNav from './components/navigation/TopNav'
import SideNav from './components/navigation/SideNav'
import ListView from './components/list-view/ListView'
import generateHexColors from './util/generateHexColors'
import './App.css'

function App() {
  const [colors] = useState(generateHexColors())

  return (
    <div id="main-container">
      <BrowserRouter>
        <TopNav />
        <SideNav />
        <Switch>
          <Route
            exact
            path="/"
            render={props => <ListView {...props} colors={colors} />}
          />
          <Route
            exact
            path="/details"
            render={props => <DetailsView {...props} colors={colors} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App