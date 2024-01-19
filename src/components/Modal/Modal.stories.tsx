import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./index";
const meta = {
  title: "Modal Component",
  component: Modal,
  parameters: {
    // Optional parameter to center the component in the Canvas
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;
export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultModal: Story = {
  args: {
    setShowModal: () => false,
    title: "title",
    children: "i am children component",
  },
};
