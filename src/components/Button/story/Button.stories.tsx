import type { Meta, StoryObj } from '@storybook/react';

import  Button  from '../';

const meta = {
  title: 'Button Component',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args
export const Primary: Story = {
  args: {
    primary: true,
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    secondary: true,
    children: 'Secondary Button',
  },
};



export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
};
