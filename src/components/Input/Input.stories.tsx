import type { Meta, StoryObj } from '@storybook/react';

import  Input  from './index';

const meta = {
  title: 'Input Component',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "text",
    onChange: ()=> console.log('first'),
    label: "default input"
  },
};
// More on writing stories with args
export const Disabled: Story = {
  args: {
    type: "text",
    onChange: ()=> console.log('first'),
    label: "Disabled input",
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    type: "text",
    onChange: ()=> console.log('first'),
    label: "Error input",
    error: true,
  },
};


export const Success: Story = {
  args: {
    type: "text",
    onChange: ()=> console.log('first'),
    label: "Disabled input",
    success: true,
  },
};
