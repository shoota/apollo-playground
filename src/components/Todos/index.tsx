import React from 'react'

type Props = {
  isLoading?: boolean
}

export const Todos: React.VFC<Props> = ({ isLoading }) => {
  console.log(isLoading, new Date())
  return <div>test</div>
}
