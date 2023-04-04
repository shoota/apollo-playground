import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { HomeContainer } from './container/Home'

import { TodosContainer } from 'container/Todos'

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route component={HomeContainer} path="/" exact />
      <Route component={() => <TodosContainer />} path="/:fetchPolicy" exact />
    </Switch>
  </BrowserRouter>
)
