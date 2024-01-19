import type { Meta, StoryObj } from "@storybook/react";
import Select from "./index";
const meta = {
  title: "Select Component",
  component: Select,
  parameters: {
    // Optional parameter to center the component in the Canvas
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;
export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultSelect: Story = {
  args: {
    onChange: () => console.log("first"),
    options: ["Venue1", "Venue2"],
  },
};
