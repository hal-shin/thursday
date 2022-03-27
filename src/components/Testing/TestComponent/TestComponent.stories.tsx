import React from "react";

import { Meta, Story } from "@storybook/react";

import { TestComponent } from "./TestComponent";

const meta: Meta = {
  title: "Components/TestComponent",
  component: TestComponent,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props) => (
  <TestComponent {...props}>Hello</TestComponent>
);

export const Default = Template.bind({});
Default.args = {};
