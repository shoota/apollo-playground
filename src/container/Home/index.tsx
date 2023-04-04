import React from 'react'
import { Card, Typography } from 'antd'
import styled from 'styled-components'
// import { useHistory } from 'react-router'

const Wrapper = styled.div`
  margin: 40px;
`

const policies = [
  'cache-first',
  'network-only',
  'cache-and-network',
  'cache-only',
  'no-cache',
  'standby',
]

export const HomeContainer = () => {
  return (
    <Wrapper>
      <Card title="Hello">
        <h1>Here is Home</h1>
        <ul>
          {policies.map((policy) => (
            <li key={policy}>
              <Typography.Link href={`/${policy}`}>{policy}</Typography.Link>
            </li>
          ))}
        </ul>
      </Card>
    </Wrapper>
  )
}
