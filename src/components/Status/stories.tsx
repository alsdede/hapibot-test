import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Status, {StatusProps} from '.'

export default {
  title: 'Status',
  component: Status,
  argTypes: {
    title:{
      type:'string'
    },
    value:{
      type:'string'
    }
  }
} as Meta

export const Default: Story<StatusProps> = (args) => <Status {...args}/>

Default.args = {
  title: 'LIKES',
  value:'23k'
}
