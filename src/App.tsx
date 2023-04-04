import React from 'react'
import { ApolloProvider } from '@apollo/client'

import { Routes } from './routes'

import { client } from 'apolloClient'

export const App = () => (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
)
