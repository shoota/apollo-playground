import { ComponentStory, ComponentMeta } from '@storybook/react'
import * as React from 'react'

import { Todos } from '../Todos'

const todos = [
  {
    id: 1,
    contents: '宇宙空間に行く',
    finished: true,
  },
  {
    id: 2,
    contents: '月旅行に行く',
    finished: false,
  },
  {
    id: 3,
    contents: '本を書く',
    finished: false,
  },
]

const meta: ComponentMeta<typeof Todos> = {
  title: 'Example/Todos',
  component: Todos,
  args: {
    todos,
  },
}

export default meta

const Template: ComponentStory<typeof Todos> = (args) => <Todos {...args} />

export const Main = Template.bind({})
