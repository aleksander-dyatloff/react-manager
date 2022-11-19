import { Meta, Story } from '@storybook/react'
import { ComponentProps } from 'react'

import Component from './index'

export default {
  title: 'Components/InteractiveElement',
  component: Component,
} as Meta

const Template: Story<ComponentProps<typeof Component>> = (args) => (
  <Component {...args} />
)

export const Default = Template.bind({})
Default.args = { children: 'Some text' }

export const GlassVariant = Template.bind({})
GlassVariant.args = {
  children: 'Some text',
  material: Component.material.Glass,
}

export const ObjectVariant = Template.bind({})
ObjectVariant.args = {
  children: 'Some text',
  material: Component.material.Object,
}
