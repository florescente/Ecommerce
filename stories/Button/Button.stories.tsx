import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from '.'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
)

export const Normal = Template.bind({})
Normal.args = {}

export const Big = Template.bind({})
Big.args = {
  size: 'big',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
}
