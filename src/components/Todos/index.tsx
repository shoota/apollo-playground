import React from 'react'
import { List, Typography, Space, Card, Button, Divider } from 'antd'
import { CheckCircleTwoTone } from '@ant-design/icons'

type Todo = {
  id: number
  contents: string
  finished: boolean
}

type Props = {
  isLoading?: boolean
  todos?: Todo[]
  getContent?: () => void
}

export const Todos: React.VFC<Props> = ({ todos, isLoading, getContent }) => {
  console.log(isLoading, new Date())
  return (
    <Card title="TODO List" style={{ margin: '5%' }}>
      <Button onClick={getContent}>データを取る</Button>
      <Divider />
      <List
        loading={isLoading}
        dataSource={todos}
        renderItem={({ id, contents, finished }) => (
          <List.Item key={id}>
            <Typography.Title level={3}>
              <Space>
                <CheckCircleTwoTone
                  twoToneColor={finished ? '#52c41a' : '#e3e3e3'}
                />
                {contents}
              </Space>
            </Typography.Title>
          </List.Item>
        )}
      />
    </Card>
  )
}
