import React, { useCallback } from 'react'
import { WatchQueryFetchPolicy } from '@apollo/client'
import { useParams } from 'react-router'

import { Todos } from 'components/Todos'
import { useTodosLazyQuery } from 'graphql/api'

export const TodosContainer: React.FC = () => {
  const { fetchPolicy = 'network-only' } = useParams<{
    fetchPolicy: WatchQueryFetchPolicy
  }>()

  const [getTodo, { data, loading }] = useTodosLazyQuery({
    fetchPolicy: fetchPolicy as WatchQueryFetchPolicy,
  })
  const getContent = useCallback(() => getTodo(), [getTodo])
  return (
    <Todos todos={data?.todos} isLoading={loading} getContent={getContent} />
  )
}
