import { Meta, Story } from '@storybook/react'
import { ComponentProps } from 'react'

import Component from './index'

export default {
  title: 'Components/Button',
  component: Component,
} as Meta

const Template: Story<ComponentProps<typeof Component>> = (args) => (
  <Component {...args} />
)

export const Default = Template.bind({})
Default.args = { children: 'Button' }
