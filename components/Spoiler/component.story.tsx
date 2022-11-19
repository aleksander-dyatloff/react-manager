import { Meta, Story } from '@storybook/react'
import { ComponentProps } from 'react'

import Component from './index'

export default {
  title: 'Components/Spoiler',
  component: Component,
} as Meta

const Template: Story<ComponentProps<typeof Component>> = (args) => (
  <div style={{ maxWidth: '280px' }}>
    <Component {...args}>
      <div style={{ padding: 10 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Odit necessitatibus vitae quidem temporibus id nostrum voluptates,
        illo quam distinctio dolor hic eum voluptatem placeat deserunt officia perferendis
        nulla fugit sapiente!
      </div>
    </Component>
  </div>
)

export const Default = Template.bind({})
Default.args = { title: 'Expand this spoiler' }
