import { ApolloClient, InMemoryCache } from '@apollo/client'

import result from './graphql/introspection-result'

// Hasura Graphql endpoint
const uri = 'http://localhost:8080/v1/graphql'
const cache = new InMemoryCache(result)

export const client = new ApolloClient({
  uri,
  cache,
})
