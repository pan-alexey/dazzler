import type { Meta, StoryObj } from '@storybook/react';
import Button from './src/index';
import React from 'react';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

type Story = StoryObj<typeof meta>;
export const Basic: Story = {
  args: {
    primary: true,
    children: 'Button1',
  },
};

export default meta;
